import { useState, useEffect, useRef } from "react";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

import Btn from "../../../components/button";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false
  })
});

const schedulePushNotification = async (customer) => {
  const message = `A friendly reminder about our friend: ${customer.lastName}, ${customer.firstName}`;
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'TouchCRM Reminder',
      body: message,
      data: customer,
    },
    trigger: { seconds: 10 }
  })
};

const registerForPushNotificationsAsync = async () => {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification');
      return null;
    }

    token = (await Notifications.getDevicePushTokenAsync()).data;
    console.log('push notification token:', token);
  } else {
    alert('must use device for push notifications');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#ff231f'
    })
  }

  return token;
}

const SimpleCustomerNotification = ({ customer }) => {
  const [, setExpoPushToken] = useState('');
  const [, setNotify] = useState(false);
  const notifyListener = useRef()
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notifyListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotify(notification)
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(res => console.log(res));

    return () => {
      Notifications.removeNotificationSubscription(notifyListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <Btn title={"SCHEDULE A NOTIFICATION (10 secs)"} onPress={async () => {
      await schedulePushNotification(customer);
    }} />
  );
};

export default SimpleCustomerNotification;
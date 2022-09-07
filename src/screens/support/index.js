import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Btn from "../../components/button";

import styles from "../../components/styles";

const Support = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 260, height: 260, resizeMode: 'contain' }}
        source={require('../../../assets/customer-support2.png')} />
      <Text testID={route && route.name} style={styles.testing}>support</Text>
      <Btn title={"GO BACK HOME"} onPress={() => navigation.navigate("Home")} />
      <Btn title={"GO TO LOGIN"} onPress={() => navigation.navigate("Login")} />
      <StatusBar style={"auto"} />
    </View>
  );
};



export default Support;
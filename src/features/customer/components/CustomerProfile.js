import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PropTypes from 'prop-types';

import SimpleCustomerNotification from "../../notifications/components/SimpleCustomerNotification";
import Btn from "../../../components/button";
import styles from "../../../components/styles";
import { salesRegions } from "../../../utilities/_DATA";

export const generateUID = () => {
  return Math.random()
    .toString(36)
    .substring(2, 15) + Math.random()
    .toString(36)
    .substring(2, 15);
};

const CustomerProfile = ({ customer }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={{ width: 280, height: 280, resizeMode: 'contain' }}
             source={require('../../../../assets/img_avatar.png')} />
      <Text>{customer.email}</Text>
      <Text>Region: {salesRegions[customer.salesRegion]}</Text>
      <Text>Phone Number: {customer.phoneNumber}</Text>
      <Btn
        title={'EDIT RECORD'}
        onPress={() => navigation.navigate({ name: 'AddCustomer', params: { id: customer.id }})} />
      <SimpleCustomerNotification customer={customer} />
    </View>
  );
};

CustomerProfile.propTypes = {
  customer: PropTypes.shape({
    source: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    salesRegion: PropTypes.oneOf([
      's', 'se', 'e', 'ne', 'n', 'nw', 'w', 'sw'
    ]),
    notes: PropTypes.string
  })
};

export default CustomerProfile;
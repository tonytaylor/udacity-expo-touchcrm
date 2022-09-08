import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";

import CustomerForm from "../../../features/customer/components/CustomerForm";
import { getCustomerFields } from "../../../features/customer/components/CustomerForm";

import { add, update } from '../../../features/customer/customerSlice';
import { generateUID } from "../../../features/customer/components/CustomerProfile";
import { getRandomSalesRegion } from "../../../utilities/_DATA";
import styles from "../../../components/styles";

const AddCustomer = ({ navigation, route, dispatch }) => {
  const onSubmit = (data) => {
    if (route.params) {
      dispatch(update(data));
    } else {
      const customer = Object.assign(data, {
        id: generateUID(),
        source: 'website',
        created: Date.now(),
        salesRegion: getRandomSalesRegion().regionId
      });
      dispatch(add(customer));
    }
    navigation.navigate('Customers');
  };
  return (
    <View style={{ backgroundColor: '#ccc', marginLeft: 8, marginRight: 8 }}>
      {/* TODO: Find a better way to maintain testIDs while introducing minimal noise. */}
      <Text testID={route && route.name} style={styles.testing}>add customer</Text>
      <CustomerForm formConfig={getCustomerFields()} saveCustomer={onSubmit} route={route} />
      <StatusBar style={"auto"} />
    </View>
  );
};

const mapStateToProps = (state, { navigation, route, dispatch }) => ({ route, dispatch, navigation });

export default connect(mapStateToProps)(AddCustomer);
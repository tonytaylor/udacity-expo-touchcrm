import { View, Text } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import CustomerProfile from "../../../features/customer/CustomerProfile";
import styles from "../../../components/styles";

const ViewOneCustomer = ({ customer, route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>{customer.firstName} {customer.lastName}</Text>
      <CustomerProfile customer={customer} />
    </View>
  )
};


const mapStateToProps = ({ customers }, { route, navigation }) => {
  const customer = Object.values(customers).filter((customer) => customer.id === route.params.id)[0];
  console.log('display customer', customer);
  return { route, customer, navigation };
};

export default connect(mapStateToProps)(ViewOneCustomer);
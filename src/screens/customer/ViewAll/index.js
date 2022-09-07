import { View, Text } from "react-native";
import { connect } from "react-redux";
import { StatusBar } from "expo-status-bar";

import Btn from "../../../components/button";
import styles from "../../../components/styles";

import { useAuth } from "../../../features/auth/hooks";
import CustomerList from "../../../features/customer/CustomerList";

const ViewAllCustomers = ({ navigation, route }) => {
  const { logout } = useAuth();
  return (
    <View style={styles.container}>
      <Text testID={route && route.name} style={styles.testing}>view all customers</Text>
      <CustomerList style={{ width: '100%' }} />
      <Btn title={"VIEW REGIONS"} onPress={() => navigation.navigate('Regions')} />
      <Btn style={{ width: 320 }} title={"CREATE NEW CUSTOMER"} onPress={() => navigation.navigate('AddCustomer')} />
      <Btn title={"LOGOUT"} onPress={() => logout()} />
      <StatusBar style={"auto"} />
    </View>
  );
};

const mapStateToProps = (state, { navigation, route }) => ({ route, navigation });

export default connect(mapStateToProps)(ViewAllCustomers);
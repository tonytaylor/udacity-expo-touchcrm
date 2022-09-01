import { View, Text } from "react-native";
import { connect } from "react-redux";
import { StatusBar } from "expo-status-bar";

import Btn from "../../../components/button";
import { useAuth } from "../../../features/auth/hooks";

const ViewAllCustomers = ({ navigation, route }) => {
  const { logout } = useAuth();
  return (
    <View>
      <Text testID={route && route.name}>view all customers</Text>
      <Btn title={"logout"} onPress={() => logout()} />
      <StatusBar style={"auto"} />
    </View>
  );
};

const mapStateToProps = (state, { navigation, route }) => ({ route, navigation });

export default connect(mapStateToProps)(ViewAllCustomers);
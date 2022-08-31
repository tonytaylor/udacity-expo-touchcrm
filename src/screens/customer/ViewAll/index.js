import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const ViewAllCustomers = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>view all customers</Text>
      <StatusBar style={"auto"} />
    </View>
  );
};

export default ViewAllCustomers;
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const AddCustomer = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>add customer</Text>
      <StatusBar style={"auto"} />
    </View>
  );
};

export default AddCustomer;
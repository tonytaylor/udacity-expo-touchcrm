import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Login = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>login</Text>
      <StatusBar style={"auto"} />
    </View>
  )
};

export default Login;
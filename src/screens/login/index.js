import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Btn from '../../components/button';
import styles from "../../components/styles";

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text testID={route && route.name}>login</Text>
      <Btn title={"get support information"} onPress={() => navigation.navigate("Support")} />
      <StatusBar style={"auto"} />
    </View>
  )
};

export default Login;
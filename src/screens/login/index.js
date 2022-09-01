import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";

import Btn from '../../components/button';
import styles from "../../components/styles";

import { useAuth } from '../../features/auth/hooks';

const Login = ({ navigation, route }) => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Text testID={route && route.name}>login</Text>
      <Btn title={"login for real"} onPress={() => login("foo")} />
      <Btn title={"get support information"} onPress={() => navigation.navigate("Support")} />
      <StatusBar style={"auto"} />
    </View>
  )
};

const mapStateToProps = (state, { route, navigation }) => ({ navigation, route });

export default connect(mapStateToProps)(Login);
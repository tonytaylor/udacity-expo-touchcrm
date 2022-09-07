import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { connect } from "react-redux";

import Btn from '../../components/button';
import styles from "../../components/styles";

import { useAuth } from '../../features/auth/hooks';

const Login = ({ navigation, route }) => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 260, height: 260, resizeMode: 'contain' }}
        source={require('../../../assets/login-icon.png')} />
      <Text testID={route && route.name}>login</Text>
      <Btn title={"LOGIN"} onPress={() => login({value: true})} />
      <Btn title={"GET SUPPORT"} onPress={() => navigation.navigate("Support")} />
      <StatusBar style={"auto"} />
    </View>
  )
};

const mapStateToProps = (state, { route, navigation }) => ({ navigation, route });

export default connect(mapStateToProps)(Login);
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Btn from '../../components/button';
import styles from "../../components/styles";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text testID={route && route.name}>Welcome home</Text>
      <Btn title={"sign in"} onPress={() => navigation.navigate("Login")} />
      <StatusBar style={"auto"} />
    </View>
  );
};

export default Home;
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import Btn from '../../components/button';
import styles from "../../components/styles";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 260, height: 260, resizeMode: 'contain' }}
        source={require('../../../assets/welcome-icon.png')} />
      <Text testID={route && route.name} style={styles.testing}>Welcome home</Text>
      <Btn title={"PRESS TO ENTER"} onPress={() => navigation.navigate("Login")} />
      <StatusBar style={"auto"} />
    </View>
  );
};

export default Home;
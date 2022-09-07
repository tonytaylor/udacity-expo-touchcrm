import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import Btn from "../../components/button";

import styles from "../../components/styles";

const Support = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text testID={route && route.name}>support</Text>
      <Btn title={"GO BACK HOME"} onPress={() => navigation.navigate("Home")} />
      <Btn title={"GO TO LOGIN"} onPress={() => navigation.navigate("Login")} />
      <StatusBar style={"auto"} />
    </View>
  );
};



export default Support;
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>Welcome home</Text>
      <StatusBar style={"auto"} />
    </View>
  );
};

export default Home;
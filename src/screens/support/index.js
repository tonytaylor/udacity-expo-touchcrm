import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const Support = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>support</Text>
      <StatusBar style={"auto"} />
    </View>
  );
};

export default Support;
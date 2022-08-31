import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const ViewAllRegions = ({ route }) => {
  return (
    <View>
      <Text testID={route && route.name}>view all regions</Text>
      <StatusBar style={"auto"} />
    </View>
  );
};

export default ViewAllRegions;
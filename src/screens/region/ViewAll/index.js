import { View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "../../../components/styles";
import { salesRegions } from "../../../utils/_DATA";

const ViewAllRegions = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text testID={route && route.name} style={styles.testing}>view all regions</Text>
      <Text style={styles.screenTitle}>Sales Regions</Text>
      <FlatList
        style={{ marginTop: 48 }}
        data={Object.entries(salesRegions)}
        renderItem={({ item }) => (
          <View style={{ width: '100%', height: 48 }}><Text style={styles.textMedium}>{item[1]}</Text></View>
        )}
        keyExtractor={(item) => item[0]} />
      <Text style={{ fontSize: 10, padding: 10 }}>
        (wouldn't it be cool if these items link to a Customers View filtered by the region?)
      </Text>
      <StatusBar style={"auto"} />

    </View>
  );
};

export default ViewAllRegions;
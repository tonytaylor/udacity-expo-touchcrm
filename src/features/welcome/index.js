import { View, Text, Button } from 'react-native';
import { useState } from "react";


const Welcome = () => {
  const msg = (<Text testID={"responseMsg"}>how are ya?</Text>);
  const [showMsg, setShowMsg] = useState(false);

  return (
    <View>
      <Text testID={"staticMsg"}>hello!</Text>
      {showMsg && msg}
      <Button
        testID={"mainBtn"}
        onPress={() => setShowMsg(!showMsg) }
        title={"click here"} />
    </View>
  );
};

export default Welcome;
import { Button } from "react-native";

const Btn = ({ title = "No title provided.", onPress = () => {} }) => {
  return (
    <Button
      testID={"TouchCRM.Button"}
      style={{ width: '100%' }}
      onPress={onPress}
      title={title} />
  );
};

export default Btn;
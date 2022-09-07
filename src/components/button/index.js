import {Button, Text, TouchableOpacity} from "react-native";
import styles from "../styles";

const Btn = ({ title = "No title provided.", onPress = () => {} }) => {
  return (
    <TouchableOpacity
      testID={'TouchCRM.Button'}
      style={styles.formButton.container}
      onPress={onPress}>
      <Text style={styles.formButton.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;
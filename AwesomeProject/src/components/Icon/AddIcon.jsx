import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../../utils/colors";
const { white, accentColor } = colors;

export const AddIcon = () => {
  return (
    <TouchableOpacity style={styles.icon}>
      <AntDesign name="pluscircleo" size={25} color={accentColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    top: 79,
    left: 107,
  },
});

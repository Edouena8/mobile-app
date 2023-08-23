import { StyleSheet, View } from "react-native";
import { colors } from "../../../utils/colors";

const { white } = colors;

export default function PhotoBox() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: white,
    borderRadius: 16,
  },
});

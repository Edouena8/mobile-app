import { StyleSheet, View } from "react-native";
import { AddIcon } from "../Icon/AddIcon";
import { colors } from "../../../utils/colors";
const { secondaryBg } = colors;

export default function PhotoBox() {
  return (
    <View style={styles.box}>
      <AddIcon/>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    width: 120,
    height: 120,
    top: -60,
    borderRadius: 16,
    backgroundColor: secondaryBg,
  },
});

import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils/colors";
const { primaryTextColor } = colors;

export default function ({ name }) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.headerText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontFamily: "roboto-med",
    color: primaryTextColor,
  },
});

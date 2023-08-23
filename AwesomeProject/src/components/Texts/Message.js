import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils/colors";
const { additionalTextColor } = colors;

export const Message = ({ message, link }) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{message}</Text>
      <TouchableOpacity>
        <Text style={[styles.text, { textDecorationLine: "underline" }]}>
          {link}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    marginTop: 16,
    gap: 4,
    flexDirection: "row",
  },

  text: {
    fontFamily: "roboto-reg",
    color: additionalTextColor,
  },
});

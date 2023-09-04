import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils/colors";
const { additionalTextColor } = colors;

export const Message = ({ message, link, onNav }) => {
  return (
    <View>
      <TouchableOpacity style={styles.wrap} onPress={onNav}>
        <Text style={styles.text}>{message}</Text>

        <Text style={styles.span}>{link}</Text>
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

  span: {
    fontFamily: "roboto-reg",
    color: additionalTextColor,
    textDecorationLine: "underline",
  },
});

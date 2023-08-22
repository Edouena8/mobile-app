import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
    color: "#1B4371",
  },
});

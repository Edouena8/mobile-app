import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const SubmitBtn = ({label}) => {
    return (
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    marginTop: 43,
    paddingTop: 16,
    paddingRight: 80,
    paddingBottom: 16,
    paddingLeft: 80,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  btnText: {
    fontFamily: "roboto-reg",
    lineHeight: 19,
    color: "#FFFFFF",
    alignItems: "center",
  },
});
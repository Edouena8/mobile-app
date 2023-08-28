import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";
const { accentColor, white } = colors;

export const SubmitBtn = ({label, onSubmit}) => {
    return (
      <TouchableOpacity style={styles.btn} onPress={onSubmit}>
        <Text style={styles.btnText}>{label}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    marginTop: 37,
    paddingTop: 16,
    paddingRight: 80,
    paddingBottom: 16,
    paddingLeft: 80,
    borderRadius: 100,
    backgroundColor: accentColor,
  },
  btnText: {
    fontFamily: "roboto-reg",
    lineHeight: 19,
    color: white,
    alignItems: "center",
  },
});
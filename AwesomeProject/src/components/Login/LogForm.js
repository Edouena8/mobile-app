import { StyleSheet, View } from "react-native";
import { StyledTextInput } from "../Inputs/StyledTextInput";
import { SubmitBtn } from "../Buttons/SubmitBtn";
import { colors } from "../../../utils/colors";
const { borderColor } = colors;

export default function LogForm() {
  return (
    <View style={styles.formWrap}>
      <StyledTextInput
        inputMode="email"
        placeholder="Адреса електронної пошти"
      />
      <StyledTextInput
        style={{ paddingRight: 100, marginTop: 16 }}
        placeholder="Пароль"
        isPassword={true}
      />
      <SubmitBtn label="Увійти" />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    width: "100%",
    marginTop: 32,
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderColor: borderColor,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },
});

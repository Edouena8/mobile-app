import { StyleSheet, View } from "react-native";
import { StyledTextInput } from "../Inputs/StyledTextInput";
import { SubmitBtn } from "../Buttons/SubmitBtn";

export default function RegForm() {
  return (
    <View style={styles.formWrap}>
      <StyledTextInput
        style={styles.inputTop}
        inputMode="text"
        placeholder="Логін"
      />

      <StyledTextInput
        inputMode="email"
        placeholder="Адреса електронної пошти"
      />
      <StyledTextInput
        style={styles.passwordInput}
        placeholder="Пароль"
        isPassword={true}
      />
      <SubmitBtn label="Зареєструватися" />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    width: "100%",
    justifyContent: "center",
  },
  inputTop: {
    marginTop: 32,
  },
  passwordInput: {
    paddingRight: 100,
  },
});

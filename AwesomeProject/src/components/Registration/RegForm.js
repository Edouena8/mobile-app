import {
  StyleSheet,
  View,
} from "react-native";
import { StyledTextInput } from "../Inputs/StyledTextInput";
import { SubmitBtn } from "../Buttons/SubmitBtn";

export default function RegForm() {
  return (
    <View style={styles.formWrap}>
      <StyledTextInput inputMode="text" placeholder="Логін" />
      <StyledTextInput
        style={{ marginTop: 16 }}
        inputMode="email"
        placeholder="Адреса електронної пошти"
      />
      <StyledTextInput
        style={{ paddingRight: 100, marginTop: 16 }}
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
    marginTop: 32, //22
    justifyContent: "center",
  },
});

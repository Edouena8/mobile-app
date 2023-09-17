import { StyleSheet, View } from "react-native";
import { StyledTextInput } from "../Inputs/StyledTextInput";
import { SubmitBtn } from "../Buttons/SubmitBtn";
import { useState } from "react";

export default function LogForm({ onNav }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    setEmail("");
    setPassword("");
    console.log(`email: ${email}, password: ${password}`);
    onNav();
  };

  return (
    <View style={styles.formWrap}>
      <StyledTextInput
        style={styles.inputTop}
        inputMode="email"
        placeholder="Адреса електронної пошти"
        value={email}
        onChange={setEmail}
      />
      <StyledTextInput
        style={styles.passwordInput}
        placeholder="Пароль"
        maxLength={15}
        isPassword={true}
        value={password}
        onChange={setPassword}
      />
      <SubmitBtn label="Увійти" onSubmit={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    width: "100%",
    gap: 16,
    marginTop: 37,
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 100,
  },
});

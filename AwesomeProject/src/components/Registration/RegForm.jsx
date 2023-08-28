import {  StyleSheet, View } from "react-native";
import { StyledTextInput } from "../Inputs/StyledTextInput";
import { SubmitBtn } from "../Buttons/SubmitBtn";
import { useState } from "react";

export default function RegForm() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSingup = () => {
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
  };

  return (
    <View style={styles.formWrap}>
      <StyledTextInput
        style={styles.inputTop}
        inputMode="text"
        placeholder="Логін"
        value={login}
        onChange={setLogin}
      />

      <StyledTextInput
        style={styles.input}
        inputMode="email"
        placeholder="Адреса електронної пошти"
        value={email}
        onChange={setEmail}
      />
      <StyledTextInput
        style={styles.passwordInput}
        placeholder="Пароль"
        maxLength={17}
        isPassword={true}
        value={password}
        onChange={setPassword}
      />
      <SubmitBtn label="Зареєструватися" onSubmit={onSingup} />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    width: "100%",
    justifyContent: "center",
    marginTop: 32,
    gap: 16,
  },
  passwordInput: {
    paddingRight: 100,
  },
});

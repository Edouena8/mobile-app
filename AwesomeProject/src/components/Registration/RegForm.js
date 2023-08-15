import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegForm() {
  return (
    <View style={styles.formWrap}>
      <TextInput style={styles.input} placeholder="Логін" />
      <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
      <TextInput style={styles.input} placeholder="Пароль" />
      <Text style={styles.showText}>Показати</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formWrap: {
    width: "100%",
    marginTop: 32,
    marginBottom: 16,
    justifyContent: "center",
  },
  input: {
    padding: 10,
    marginBottom: 16,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 8,
  },
  showText: {
    top: -53,
    right: 10,
    fontFamily: "roboto-reg",
    lineHeight: 19,
    color: "#1B4371",
    textAlign: "right",
  },
  btn: {
    alignItems: "center",
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

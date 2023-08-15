import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { gStyle } from "../../../styles/style";
import RegForm from "../Registration/RegForm";
import PhotoBox from "../Registration/PhotoBox";

const image = require("../../../assets/images/bg-photo.png");

export default function RegistrationScreen() {
  return (
    <View style={styles.wrap}>
      <PhotoBox />
      <Text style={gStyle.title}>Реєстрація</Text>
      <RegForm />
      <Text style={styles.text}>Вже є акаунт? Увійти</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: "68%",
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  text: {
    fontFamily: "roboto-reg",
    color: "#1B4371",
  },
});

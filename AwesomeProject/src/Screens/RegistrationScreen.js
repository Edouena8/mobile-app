import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import RegForm from "../components/Registration/RegForm";
import PhotoBox from "../components/Registration/PhotoBox";
import { Message } from "../components/Texts/Message";

export default function RegistrationScreen() {
  return (
    <View style={styles.wrap}>
      <PhotoBox />
      <Text style={styles.title}>Реєстрація</Text>
      <RegForm />
      <Message message="Вже є акаунт?" link="Увійти" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "#212121",
    fontFamily: "roboto-med",
    marginTop: 69, //60
  },
  wrap: {
    height: "68%",
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: "#FFFFFF",
  },
});

import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";
import RegForm from "../components/Registration/RegForm";
import PhotoBox from "../components/Registration/PhotoBox";
import { Message } from "../components/Texts/Message";
import { colors } from "../../utils/colors";
const { primaryTextColor, white } = colors;

export default function RegistrationScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-140}
    >
      <View style={styles.wrap}>
        <PhotoBox />

        <Text style={styles.title}>Реєстрація</Text>
        <RegForm />
        <Message message="Вже є акаунт?" link="Увійти" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: primaryTextColor,
    fontFamily: "roboto-med",
    marginTop: 69, //60
  },
  wrap: {
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: white,
  },
});

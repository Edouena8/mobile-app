import { StyleSheet, Text, View } from "react-native";
import LogForm from "../components/Login/LogForm";
import { Message } from "../components/Texts/Message";
import { colors } from "../../utils/colors";
const {primaryTextColor, additionalTextColor, white } = colors;

export default function LoginScreen() {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>Увійти</Text>
      <LogForm />

      <Message message="Немає акаунту?" link="Зареєструватися"/>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: "60%",
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: white,
  },
  title: {
    fontSize: 30,
    color: primaryTextColor,
    fontFamily: "roboto-med",
    marginTop: 32,
  },
  text: {
    marginTop: 16,
    fontFamily: "roboto-reg",
    color: additionalTextColor,
  },
});

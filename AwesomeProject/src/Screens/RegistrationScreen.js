import { StyleSheet, View, Text } from "react-native";
import RegForm from "../components/Registration/RegForm";
import PhotoBox from "../components/Registration/PhotoBox";
import { Message } from "../components/Texts/Message";
import { colors } from "../../utils/colors";
const { primaryTextColor, white, userBorder } = colors;

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
    color: primaryTextColor,
    fontFamily: "roboto-med",
    marginTop: 69, //60
  },
  wrap: {
    padding: 16,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: userBorder,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: white,
  },
});

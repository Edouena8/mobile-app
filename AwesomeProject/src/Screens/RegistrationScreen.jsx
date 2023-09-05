import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import RegForm from "../components/Registration/RegForm";
import PhotoBox from "../components/Registration/PhotoBox";
import { Message } from "../components/Texts/Message";
import { colors } from "../../utils/colors";
import { Background } from "../components/Images/Background";
const { primaryTextColor, white } = colors;

export default function RegistrationScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-120}
      >
        <View style={styles.container}>
          <Background>
            <View style={styles.wrap}>
              <PhotoBox />
              <Text style={styles.title}>Реєстрація</Text>
              <RegForm onNav={() => navigation.navigate("BottomNavigator")} />
              <Message
                message="Вже є акаунт?"
                link="Увійти"
                onNav={() => navigation.navigate("Login")}
              />
            </View>
          </Background>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: primaryTextColor,
    fontFamily: "roboto-med",
  },
  wrap: {
    paddingTop: 92,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: white,
  },
});

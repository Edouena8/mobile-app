import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import LogForm from "../components/Login/LogForm";
import { Message } from "../components/Texts/Message";
import { colors } from "../../utils/colors";
import { Background } from "../components/Images/Background";
const { primaryTextColor, white } = colors;

export default function LoginScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-140}
        style={styles.container}
      >
        <View style={styles.container}>
          <Background>
            <View style={styles.wrap}>
              <Text style={styles.title}>Увійти</Text>
              <LogForm onNav={() => navigation.navigate("BottomNavigator")} />
              <Message
                message="Немає акаунту?"
                link="Зареєструватися"
                onNav={() => navigation.navigate("Registration")}
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
  wrap: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 50,
    alignItems: "center",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: white,
  },
  title: {
    fontSize: 30,
    color: primaryTextColor,
    fontFamily: "roboto-med",
  },
});

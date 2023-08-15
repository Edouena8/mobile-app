import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./src/components/Screens/RegistrationScreen";

const image = require("./assets/images/bg-photo.png");

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-med": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-reg": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

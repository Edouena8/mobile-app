// import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./src/routes/MainNavigator";

export default function App() {
  const [fontsLoaded] = useFonts({
    "roboto-med": require("./assets/fonts/Roboto-Medium.ttf"),
    "roboto-reg": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <MainNavigator />;
}

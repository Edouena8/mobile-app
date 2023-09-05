import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegistrationScreen from "../Screens/RegistrationScreen";
import LoginScreen from "../Screens/LoginScreen";
import Home from "../Screens/Home";
import BottomNavigator from "./BottomNavigator";

const MainStack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="BottomNavigator" component={BottomNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

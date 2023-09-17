import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, AntDesign } from "@expo/vector-icons";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Header from "../components/Texts/Header";
import LogOutIcon from "../components/Icon/LogOutIcon";
import { colors } from "../../utils/colors";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
const {
  primaryBg,
  primaryTextColor,
  borderColor,
  iconColor,
  accentColor,
  white,
} = colors;

const Tab = createBottomTabNavigator();

const getRoute = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return {
    justifyContent: "center",
    height: 60,
    
    // paddingVertical: 9,
    paddingHorizontal: 31,
    borderTopColor: "#e8e8e8",
    borderTopWidth: 1,
  };
};

export default function BottomNavigator() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: getRoute(route),
        headerStyle: {
          backgroundColor: primaryBg,
          borderBottomColor: borderColor,
          borderBottomWidth: 1,
          height: 88,
        },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="appstore-o"
              size={24}
              style={[styles.icon, focused && { color: accentColor }]}
            />
          ),
          headerTitle: () => <Header name="Публікації" />,
          headerRight: () => <LogOutIcon />,
          headerTitleAlign: "center",
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          tabBarIcon: ({ focused, size }) => (
            <View style={styles.unionButton}>
              <AntDesign name="plus" size={size} style={styles.addIcon} />
            </View>
          ),
          tabBarStyle: {
            display: "none",
          },
          headerTitle: () => <Header name="Створити публікацію" />,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
            </TouchableOpacity>
          ),
          unmountOnBlur: true,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              style={[styles.icon, focused && { color: accentColor }]}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  menuWrap: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 39,
    textAlign: "center",
    paddingVertical: 9,
    borderTopColor: "#e8e8e8",
    borderTopWidth: 1,
  },
  icon: {
    color: iconColor,
  },
  unionButton: {
    backgroundColor: accentColor,
    width: 70,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  addIcon: {
    color: white,
  },
  iconArrow: {
    color: iconColor,
    left: 16,
  },
});

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Posts" component={PostsScreen} />
        <Tab.Screen name="CreatePosts" component={CreatePostsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

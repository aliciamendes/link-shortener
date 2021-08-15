import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen/MainScreen";
import MyLinksScreen from "../screens/MyLinksScreen/MyLinksScreen";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="MyLinksScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#08B4EA",
        tabBarInactiveTintColor: "#A7A7A7",
        tabBarIconStyle: {
          marginTop: 10,
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
        },
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: "",
          tabBarIcon: ({ size, color }) => (
            <Feather name="link" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyLinksScreen"
        component={MyLinksScreen}
        options={{
          title: "",
          tabBarIcon: ({ size, color }) => (
            <Feather name="folder" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

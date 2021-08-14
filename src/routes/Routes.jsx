import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/MainScreen";
import MyLinksScreen from "../screens/MyLinksScreen";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator initialRouteName="MainScreen">
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="MyLinksScreen" component={MyLinksScreen} />
    </Tab.Navigator>
  );
}

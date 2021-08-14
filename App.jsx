import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Jost_700Bold,
  Jost_400Regular,
} from "@expo-google-fonts/jost";
import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes/Routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

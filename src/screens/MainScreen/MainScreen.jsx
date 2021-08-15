import React, { useState } from "react";
import colors from "../../styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  Subtitle,
  ContainerInput,
  BoxIcon,
  Input,
  Button,
  ButtonText,
} from "./styles";
import logo from "../../assets/logo.png";
import MyStatusBar from "../../components/MyStatusBar";

export default function MainScreen() {
  const [link, setLink] = useState("");

  function handleShort() {}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <LinearGradient
        colors={[colors.linearOne, colors.linearTwo]}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <MyStatusBar
          barStyle="light-content"
          backgroundColor={colors.linearOne}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "padding"}
          enabled
        >
          <ContainerLogo>
            <Logo source={logo} resizeMode="contain" />
          </ContainerLogo>

          <ContainerContent>
            <Title>Link Shortener</Title>
            <Subtitle>Cole seu link aqui</Subtitle>

            <ContainerInput>
              <BoxIcon>
                <Feather name="link" size={26} color="white" />
              </BoxIcon>
              <Input
                placeholder="Insira seu link aqui..."
                placeholderTextColor="white"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardTyoe="url"
                value={link}
                onChangeText={(text) => {
                  setLink(text);
                }}
              />
            </ContainerInput>

            <Button onPress={handleShort}>
              <ButtonText>Gerar Link</ButtonText>
            </Button>
          </ContainerContent>
        </KeyboardAvoidingView>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

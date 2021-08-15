import React, { useState } from "react";
import colors from "../../styles/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
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
import MyStatusBar from "../../components/MyStatusBar/MyStatusBar";
import ModalLink from "../../components/ModalLink/ModalLink";
import api from "../../services/api";
import { saveLink } from "../../utils/storeLinks";

export default function MainScreen() {
  const [link, setLink] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  async function handleShort() {
    setLoading(true);
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setModal(true);

      saveLink("linkShortenerLinks", response.data);

      Keyboard.dismiss();
      setLoading(false);
      setLink("");
    } catch {
      alert("erro");
      Keyboard.dismiss();
      setLink("");
      setLoading(false);
    }

    // setModal(true);
  }

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
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <ButtonText>Gerar Link</ButtonText>
              )}
            </Button>
          </ContainerContent>
        </KeyboardAvoidingView>

        <Modal visible={modal} transparent animationType="slide">
          <ModalLink onClose={() => setModal(false)} data={data} />
        </Modal>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

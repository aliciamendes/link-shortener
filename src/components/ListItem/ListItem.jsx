import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Container, Item } from "./styles";

export default function ListItem() {
  return (
    <View>
      <Container activeOpacity={0.9} onPress={() => {}}>
        <Feather name="link" color="#FFF" size={24} />
        <Item numberOfLines={1}>www.amskdlds.com</Item>
      </Container>
    </View>
  );
}

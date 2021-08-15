import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { DeleteContainer, Container, Item } from "./styles";
import { Swipeable } from "react-native-gesture-handler";

export default function ListItem({ data, selected, deleted }) {
  function actions() {
    return (
      <DeleteContainer onPress={() => deleted(data.id)}>
        <Feather name="trash" color="#fff" size={20} />
      </DeleteContainer>
    );
  }
  return (
    <View>
      <Swipeable renderRightActions={actions}>
        <Container activeOpacity={0.9} onPress={() => selected(data)}>
          <Feather name="link" color="#FFF" size={24} />
          <Item numberOfLines={1}>{data.long_url}</Item>
        </Container>
      </Swipeable>
    </View>
  );
}

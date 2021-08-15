import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import MyStatusBar from "../../components/MyStatusBar/MyStatusBar";
import colors from "../../styles/colors";
import { Container, Title, ListLink } from "./styles";

export default function MyLinksScreen() {
  return (
    <Container>
      <MyStatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundTwo}
      />
      <Title>Meus Links</Title>

      <ListLink
        data={[{ id: 1, link: "asdad" }]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
      ></ListLink>
    </Container>
  );
}

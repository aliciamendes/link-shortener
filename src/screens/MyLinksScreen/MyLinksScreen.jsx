import React from "react";
import ListLink from "../../components/ListLinks/ListLink";
import MyStatusBar from "../../components/MyStatusBar/MyStatusBar";
import colors from "../../styles/colors";
import { Container, Title, List } from "./styles";

export default function MyLinksScreen() {
  return (
    <Container>
      <MyStatusBar
        barStyle="light-content"
        backgroundColor={colors.linearTwo}
      />
      <Title>Meus Links</Title>

      <List
        data={{ id: 1, link: "asd" }}
        keyExtractor={(item) => String(item.id)}
        renderIrem={({ item }) => (
          <ListLink
            data={item}
            contentContainerStyle={{ paddingBottom: 20 }}
            showVerticalScrollIndicator={false}
          />
        )}
      ></List>
    </Container>
  );
}

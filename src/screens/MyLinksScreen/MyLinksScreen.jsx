import React, { useEffect, useState } from "react";
import ListItem from "../../components/ListItem/ListItem";
import MyStatusBar from "../../components/MyStatusBar/MyStatusBar";
import colors from "../../styles/colors";
import { useIsFocused } from "@react-navigation/native";
import {
  Container,
  Title,
  ListLink,
  ContainerEmpty,
  AlertText,
} from "./styles";
import { deleteLink, getLinks } from "../../utils/storeLinks";
import { ActivityIndicator, Modal } from "react-native";
import ModalLink from "../../components/ModalLink/ModalLink";

export default function MyLinksScreen() {
  const [link, setLink] = useState([]);
  const [data, setData] = useState({});
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const focused = useIsFocused();

  useEffect(() => {
    async function gettingLinks() {
      const result = await getLinks("linkShortenerLinks");
      setLink(result);
      setLoading(false);
    }
    gettingLinks();
  }, [focused]);

  function handleItem(item) {
    setData(item);
    setModal(true);
  }

  async function handleDelete(id) {
    const result = await deleteLink(link, id);
    setLink(result);
  }

  return (
    <Container>
      <MyStatusBar
        barStyle="light-content"
        backgroundColor={colors.backgroundTwo}
      />
      <Title>Meus Links</Title>
      {loading && (
        <ContainerEmpty>
          <ActivityIndicator color="#FFF" size={25} />
        </ContainerEmpty>
      )}

      {!loading && link.length === 0 && (
        <ContainerEmpty>
          <ActivityIndicator color="#FFF" size={25} />
        </ContainerEmpty>
      )}

      <ListLink
        data={link}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem data={item} selected={handleItem} deleted={handleDelete} />
        )}
        contentContainerStyle={{ padding: 15 }}
        showVerticalScrollIndicator={false}
      ></ListLink>

      <Modal visible={modal} transparent animationType="slide">
        <ModalLink onClose={() => setModal(false)} data={data} />
      </Modal>
    </Container>
  );
}

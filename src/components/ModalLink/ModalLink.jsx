import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  Modal,
  Container,
  Header,
  AreaLink,
  Title,
  TextUrl,
  Shortener,
  ShortLink,
} from "./styles";

export default function ModalLink({ onClose }) {
  function copyLink() {
    alert("foi");
  }
  async function handleShare() {
    try {
      const res = await Share.share({
        message: ``,
      });

      if (res.action === Share.sharedAction) {
        if (res.activityType) {
          console.log("type");
        } else {
          console.log("share");
        }
      } else if (res.action === Share.dismissedAction) {
        console.log("close");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Modal>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
      <Container>
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Feather name="x" color="#131542" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare}>
            <Feather name="share" color="#131542" size={30} />
          </TouchableOpacity>
        </Header>

        <AreaLink>
          <Title>Link Encurtado</Title>
          <TextUrl numberOfLines={1}>link por extenso</TextUrl>
          <Shortener activeOpacity={1} onPress={copyLink}>
            <ShortLink numberOfLines={1}>link encurtado</ShortLink>
            <TouchableOpacity onPress={copyLink}>
              <Feather name="copy" size={26} color="white" />
            </TouchableOpacity>
          </Shortener>
        </AreaLink>
      </Container>
    </Modal>
  );
}

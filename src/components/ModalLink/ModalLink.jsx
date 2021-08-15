import React from "react";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Share,
} from "react-native";
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
import { Feather } from "@expo/vector-icons";
import { setString } from "expo-clipboard";

export default function ModalLink({ onClose, data }) {
  function handleCopyLink() {
    setString(data.link);
    alert("foi");
  }
  async function handleShare() {
    try {
      const res = await Share.share({
        message: `Aqui seu link: ${data.link}`,
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
          <TextUrl numberOfLines={1}>{data.long_url}</TextUrl>
          <Shortener activeOpacity={1} onPress={handleCopyLink}>
            <ShortLink numberOfLines={1}>{data.link}</ShortLink>
            <TouchableOpacity onPress={handleCopyLink}>
              <Feather name="copy" size={26} color="white" />
            </TouchableOpacity>
          </Shortener>
        </AreaLink>
      </Container>
    </Modal>
  );
}

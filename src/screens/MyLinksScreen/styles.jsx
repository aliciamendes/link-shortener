import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #141a50;
`;
export const Title = styled.Text`
  text-align: center;
  margin-top: ${Platform.OS === "ios" ? 20 + "%" : 15 + "%"};
  margin-bottom: 20px;
  font-size: 33px;
  font-weight: bold;
  color: #fff;
`;
export const ListLink = styled.FlatList``;

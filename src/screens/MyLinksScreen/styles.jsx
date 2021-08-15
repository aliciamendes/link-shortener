import { Platform } from "react-native";
import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  background-color: #141a50;
`;
export const Title = styled.Text`
  margin-top: ${Platform.OS === "ios" ? 35 + "%" : 25 + "%"};
  margin-left: 20px;
  font-size: 33px;
  font-weight: bold;
  color: #fff;
`;
export const List = styled.FlatList``;

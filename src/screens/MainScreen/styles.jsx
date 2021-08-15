import styled from "styled-components/native";

import { Platform } from "react-native";

export const ContainerLogo = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${Platform.OS === "ios" ? 20 + "px" : 15 + "px"};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const ContainerContent = styled.View`
  margin-top: ${Platform.OS === "ios" ? 35 + "px" : 20 + "px"};
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #FFF;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #FFF;
  text-align: center;
  margin-bottom: 15px;
`;

export const ContainerInput = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 15px;
  padding: 0 10px 0 10px;
`;
export const BoxIcon = styled.View`
  width: 20%;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  background-color: rgba(255, 255, 255, 0.25);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const Input = styled.TextInput`
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.25);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 17px;
  color: #FFF;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  height: 45px;
  background-color: #fff;
  margin: 15px 25px 0 25px;
  border-radius: 10px;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
`;

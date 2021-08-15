import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 7px 10px;
  padding: 10px;
  border-radius: 10px;
`;
export const Item = styled.Text`
  color: #fff;
  padding-left: 10px;
  padding-right: 20px;
  font-size: 16px;
  text-align: center;
`;

export const DeleteContainer = styled.TouchableOpacity`
  background-color: #f55775;
  justify-content: center;
  align-items: center;
  margin: 8px 10px;
  width: 18%;
  border-radius: 50px;
`;

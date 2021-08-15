import styled from "styled-components";

export const Modal = styled.View`
  flex: 1;
`;
export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 0 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 0;
`;

export const AreaLink = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 28px;
  color: #08b4ea;
  font-weight: bold;
`;
export const TextUrl = styled.Text`
  color: #a7a7a7;
  font-size: 18px;
  margin-bottom: 30px;
`;
export const Shortener = styled.TouchableOpacity`
  height: 45px;
  width: 100%;
  background-color: #141a51;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;
export const ShortLink = styled.Text`
  width: 80%;
  color: #ffffff;
  font-size: 16px;
`;

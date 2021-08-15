import React from "react";
import colors from "../../styles/colors";
import MyStatusBar from "../../components/MyStatusBar";
import { Container } from "./styles";

export default function MyLinksScreen() {
  return (
      <MyStatusBar
        barStyle="light-content"
        backgroundColor={colors.linearTwo}
      />
  );
}

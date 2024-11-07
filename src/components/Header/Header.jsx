import React from "react";
import { Navbar } from "../Navbar/Navbar";
import * as S from "./StyledHeader";

export const Header = ({ variant }) => {
  return (
    <S.Header $variant={variant}>
      <S.MainContainer></S.MainContainer>
      <Navbar />
    </S.Header>
  );
};

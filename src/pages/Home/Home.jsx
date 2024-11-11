import React from "react";
import { Header } from "../../components/Header/Header";
import * as S from "./StyledHome";
import { Burger } from "../../components/Burger/Burger";

export const Home = () => {
  return (
    <S.Home>
      <Header variant="home" />
    </S.Home>

    // <Burger min="0px" max="1200px" />
  );
};

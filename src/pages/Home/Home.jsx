import React from "react";
import { Header } from "../../components/Header/Header";
import * as S from "./StyledHome";
import { Carousel } from "../../components/Carousel/Carousel";

export const Home = () => {
  return (
    <S.Home>
      <Header variant="home" />
      <Carousel />
    </S.Home>
  );
};

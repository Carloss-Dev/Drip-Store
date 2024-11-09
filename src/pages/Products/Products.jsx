import React from "react";
import * as S from "./StyledProducts";
import { Title } from "../../components/Texts/Title/Title";
import { Header } from "../../components/Header/Header";

export const Products = () => {
  return (
    <S.Products>
      <Header variant={"home"} />
      <Title>Products</Title>{" "}
    </S.Products>
  );
};
import React from "react";
import * as S from "./StyledCard";

export const Card = ({ variant = "cart-card" }) => {
  return (
    <S.Card $variant={variant}>
      <S.MainCartContainer></S.MainCartContainer>
    </S.Card>
  );
};

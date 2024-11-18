import React from "react";
import { Text } from "../Texts/Text/Text";
import * as S from "./StyledCard";
import { theme } from "../../theme/theme";

export const Card = ({
  variant = "cart-card",
  src,
  alt,
  infos,
  price,
  descount,
}) => {
  return (
    <S.Card $variant={variant}>
      <S.MainCartContainer>
        <S.DivImage>
          <img src={src} alt={alt} />
        </S.DivImage>
        <S.DivText>
          <Text color={theme.colors.darkGray} bold={true} variant="x-small">
            {infos}
          </Text>
        </S.DivText>
      </S.MainCartContainer>
      <S.PriceContainer>
        <Text bold={true} variant="small">
          {price}
        </Text>
        <Text
          variant="tinny"
          color={theme.colors.lightGray2}
          decoration="line-through"
        >
          {descount}
        </Text>
      </S.PriceContainer>
    </S.Card>
  );
};

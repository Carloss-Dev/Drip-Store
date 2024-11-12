import React from "react";
// Styled
import * as S from "./StyledCart";
// Externos

// Componentes
import { Text } from "../Texts/Text/Text";
import CartIcon from "../../../public/Cart-Icon";

export const Cart = () => {
  return (
    <S.CartContainer>
      <CartIcon className="cart-icon" />
      <S.DropdownContainer>
        <S.TitlePosition>
          <Text bold={true}>Meu Carrinho</Text>
        </S.TitlePosition>
        <S.CartContent></S.CartContent>
        <S.CartPanel></S.CartPanel>
      </S.DropdownContainer>
    </S.CartContainer>
  );
};

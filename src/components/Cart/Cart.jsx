import React from "react";
// Styled
import * as S from "./StyledCart";
// Externos

// Componentes
import CartIcon from "../../../public/Cart-Icon";

export const Cart = () => {
  return (
    <S.CartContainer>
      <CartIcon className="cart-icon" />
    </S.CartContainer>
  );
};

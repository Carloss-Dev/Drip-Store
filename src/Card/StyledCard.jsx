import styled, { css } from "styled-components";

export const MainCartContainer = styled.div``;
export const PriceContainer = styled.div``;

const CartCard = css`
  align-self: center;
  border: 1pt solid red;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 25.5rem;
  height: 9.3rem;

  ${MainCartContainer} {
    border: 1pt solid green;
    height: 70%;
    width: 100%;
  }
  ${PriceContainer} {
    border: 1pt solid blue;
    height: 30%;
    width: 100%;
  }
`;

export const Card = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "cart-card":
        return CartCard;
      default:
        return null;
    }
  }}
`;

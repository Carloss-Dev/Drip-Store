import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export const MainCartContainer = styled.div``;
export const PriceContainer = styled.div``;
export const DivImage = styled.div``;
export const DivText = styled.div``;

const CartCard = css`
  align-self: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 25.5rem;
  height: 9.3rem;

  ${MainCartContainer} {
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    ${DivImage} {
      width: 35%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.lightSky};
      border-radius: 5px;
      img {
        width: 85%;
      }
    }
    ${DivText} {
      height: 100%;
      width: 65%;
    }
  }
  ${PriceContainer} {
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
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

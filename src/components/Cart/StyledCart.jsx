import styled from "styled-components";
import { theme } from "../../theme/theme";

export const DropdownContainer = styled.div``;
export const TitlePosition = styled.div``;
export const CartContent = styled.div``;
export const CartPanel = styled.div``;

export const CartContainer = styled.div`
  position: relative;
  height: 4rem;
  width: 4rem;

  ${DropdownContainer} {
    position: relative;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
    top: 55px;
    right: -7px;
    width: 31.543rem;
    height: 45.4rem;
    border-radius: 4px;
    box-shadow: 0px 0px 3px ${theme.colors.darkGray};
    background-color: ${theme.colors.white};

    &::after {
      content: "";
      position: absolute;
      top: -18px;
      right: 0;
      width: 0;
      height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 25px solid ${theme.colors.white};
      /* border-bottom: 25px solid red; */
    }

    ${TitlePosition} {
      width: 100%;
      height: 15%;
    }
    ${CartContent} {
      width: 100%;
      height: 60%;
      border-bottom: 2px solid ${theme.colors.lightGray2};
      border-top: 2px solid ${theme.colors.lightGray2};
    }

    ${CartPanel} {
      width: 100%;
      height: 25%;
    }
  }
  .cart-icon {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

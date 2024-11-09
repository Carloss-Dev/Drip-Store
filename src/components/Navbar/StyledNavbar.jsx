import styled, { css } from "styled-components";
import theme from "../../theme/theme";

const Burger = styled.div``;

const primaryBurguer = css`
  @media (max-width: 1159px) {
    /* &::after {
      content: "";
      top: -15px;
      width: inherit;
      height: inherit;
      position: absolute;
      border-radius: inherit;
      background-color: inherit;
    }
    &::before {
      content: "";
      bottom: -15px;
      width: inherit;
      height: inherit;
      position: absolute;
      border-radius: inherit;
      background-color: inherit;
    } */

    a:nth-child(1) {
      display: none;
    }
  }
`;

const primary = css`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 40px;
  padding: 0 40px;

  ${Burger} {
    @media (max-width: 1159px) {
      height: 0.35rem;
      align-self: center;
      width: 4rem;
      border-radius: 8px;
      background-color: ${theme.colors.darkGray};
      padding: 0;
      position: relative;
      cursor: pointer;
      box-shadow: 0 -15px 0 0 ${theme.colors.darkGray},
        0 15px 0 0 ${theme.colors.darkGray};
    }
  }

  a:nth-child(1) {
    color: inherit;
    text-decoration: none;
    position: relative;
    letter-spacing: 0.5px;
    padding: 0 5px;

    &::after {
      content: "";
      height: 3px;
      width: 0;
      left: 0;
      bottom: -5px;
      position: absolute;
      border-radius: 20px;
      transition: 0.3s;
      background-color: ${theme.colors.primary};
    }

    &:hover::after,
    &:hover,
    &.link-active::after,
    &.link-active {
      width: 100%;
      color: ${theme.colors.primary};
      font-weight: bold;
    }
  }
  ${primaryBurguer}
`;

export const Navbar = styled.nav`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;

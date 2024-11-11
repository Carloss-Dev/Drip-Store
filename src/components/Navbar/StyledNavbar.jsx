import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const headerCommon = css`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 40px;
  padding: 0 40px;

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

  @media (max-width: ${theme.media.md}) {
    display: none;
  }
`;

const headerResponsive = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding-left: 20px;
  border: 1pt solid red;
  flex-direction: column;

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
`;

export const Navbar = styled.nav`
  ${({ $variant }) => {
    switch ($variant) {
      case "header-common":
        return headerCommon;
      case "header-responsive":
        return headerResponsive;
      default:
        return null;
    }
  }}
`;

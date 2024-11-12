import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const navCommon = css`
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

export const PositionContainer = styled.div``;
export const LinksContainer = styled.div``;
export const ButtonsContainer = styled.div``;

const navResponsive = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
  padding: 10px 20px;
  flex-direction: column;
  justify-content: space-between;

  ${PositionContainer} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 20rem;
  }

  ${LinksContainer} {
    display: flex;
    width: 100%;
    height: 15rem;
    flex-direction: column;
    justify-content: space-between;

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
  }

  ${ButtonsContainer} {
    border-top: 1px solid ${theme.colors.lightGray2};
    width: 100%;
    height: 11rem;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;

export const Navbar = styled.nav`
  ${({ $variant }) => {
    switch ($variant) {
      case "nav-common":
        return navCommon;
      case "nav-responsive":
        return navResponsive;
      default:
        return null;
    }
  }}
`;

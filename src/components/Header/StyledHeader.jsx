import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme/theme";

// Elementos padrões do componente
export const MainContainer = styled.div``;
export const loginContainer = styled.div``;
export const iconContainer = styled.div``;
export const AnimatedContainer = styled.div``;

// Estilos de Variantes
const home = css`
  grid-column: 1 / 13;
  background-color: ${theme.colors.white};
  height: 19.2rem;
  @media (max-width: ${theme.media.md}) {
    height: 11rem;
  }
  ${MainContainer} {
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    gap: 50px;
    padding: 0 30px;
    position: relative;
    z-index: 300;

    @media (max-width: ${theme.media.md}) {
      height: 100%;
      gap: 0;
      justify-content: space-between;
    }

    @media (max-width: ${theme.media.xs}) {
      padding: 0;
      padding-left: 3px;

      #logo {
        min-width: 100px;
        width: 60%;
      }
    }
  }
  ${loginContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 32rem;
    @media (max-width: ${theme.media.lg}) {
      width: 15%;
      flex-direction: column;
    }
    @media (max-width: ${theme.media.md}) {
      display: none;
    }
  }
  ${iconContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg:nth-child(1) {
      display: none;
    }
    @media (max-width: ${theme.media.md}) {
      width: 18%;
      max-width: 8rem;
      svg:nth-child(1) {
        display: block;
        color: ${theme.colors.lightGray2};
      }
    }
  }

  ${AnimatedContainer} {
    transform: translateY(-300%);
    transition: 0.5s;
    height: 10rem;
    width: 100%;
    background-color: ${theme.colors.white};
    display: flex;
    position: absolute;
    z-index: 200;
    align-items: center;
    justify-content: center;
    &.open {
      transform: translateY(0);
    }
  }
`;

// Definição das variantes
export const Header = styled.header`
  ${({ $variant }) => {
    switch ($variant) {
      case "home":
        return home;
      default:
        return null;
    }
  }}
`;

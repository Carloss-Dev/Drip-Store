import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

// Elementos padrões do componente
export const MainContainer = styled.div``;
export const loginContainer = styled.div``;
export const iconContainer = styled.div``;

// Estilos de Variantes
const home = css`
  grid-column: 1 / 13;
  background-color: ${theme.colors.white};
  height: 19.2rem;
  @media (max-width: ${theme.media.md}) {
    height: 14rem;
  }
  ${MainContainer} {
    display: flex;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0 30px;

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

// Estilos de icones

export const HeaderSearchStyle1 = {
  position: "absolute",
  zIndex: "200",
  color: theme.colors.lightGray2,
  top: "13px",
  right: "12px",
};

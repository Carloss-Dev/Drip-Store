import styled, { css } from "styled-components";
import theme from "../../theme/theme";

// Elementos padrões do componente
export const MainContainer = styled.div``;
export const loginContainer = styled.div``;
export const iconContainer = styled.div``;

// Estilos de Variantes
const home = css`
  grid-column: 1 / 13;
  background-color: ${theme.colors.white};
  height: 19.2rem;

  ${MainContainer} {
    display: flex;
    border: 1pt solid red;
    width: 100%;
    height: 70%;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding: 0 30px;
  }
  ${loginContainer} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 27rem;
    border: 1pt solid green;

    @media (max-width: 1159px) {
      display: none;
    }
  }
  ${iconContainer} {
    border: 1pt solid red;
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg:nth-child(1) {
      display: none;
    }
    @media (max-width: 790px) {
      width: 9rem;
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

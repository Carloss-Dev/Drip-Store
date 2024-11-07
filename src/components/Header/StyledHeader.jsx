import styled, { css } from "styled-components";
import theme from "../../theme/theme";

const home = css`
  grid-column: 1 / 13;
  background-color: ${theme.colors.white};
  height: 19.2rem;

  div {
    display: flex;
    border: 1pt solid red;
    width: 100%;
    height: 70%;
  }
`;

export const Header = styled.header`
  ${({ $variant }) => {
    switch ($variant) {
      case "home":
        return home;
    }
  }}
`;

export const MainContainer = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "home":
        return home;
    }
  }}
`;

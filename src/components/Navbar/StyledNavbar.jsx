import styled, { css } from "styled-components";

const primary = css`
  width: 100%;
  height: 30%;
  border: 1pt solid green;
`;

export const StyledNavbar = styled.nav`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;

export const StyledDiv = styled.div`
  display: flex;
`;

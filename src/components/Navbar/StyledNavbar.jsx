import styled, { css } from "styled-components";

const primary = css`
  width: 100%;
  height: 30%;
  border: 1pt solid green;
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 0 30px;
`;

export const Navbar = styled.nav`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;

export const linkStyle = {
  color: "inherit",
  textDecoration: "none",
};

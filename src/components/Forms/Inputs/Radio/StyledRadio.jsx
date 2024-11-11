import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

const primary = css`
  accent-color: ${theme.colors.primary};
`;

export const StyledRadio = styled.input.attrs({
  type: "radio",
})`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;

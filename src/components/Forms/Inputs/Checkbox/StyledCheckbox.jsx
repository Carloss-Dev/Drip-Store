import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

const primary = css`
  accent-color: ${theme.colors.primary};
`;

export const StyledCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;

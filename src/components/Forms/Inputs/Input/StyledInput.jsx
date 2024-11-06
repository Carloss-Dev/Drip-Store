import styled, { css } from "styled-components";
import theme from "../../../../theme/theme";

const primary = css`
  width: 690px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 20px;
  font-size: 15px;
  color: ${theme.colors.darkGray2};
  background-color: ${theme.colors.lightGray3};
  transition-duration: 0.2s;
  &:focus {
    box-shadow: 0 0 14px 0 ${theme.colors.darkGray2};
  }
`;

export const StyledInput = styled.input`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

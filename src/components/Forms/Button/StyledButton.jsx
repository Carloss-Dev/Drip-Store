import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  width: 100%;
  height: 100%;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.lightGray3};
  border-radius: 8px 0px 0px 0px ${theme.colors.darkGray};
  transition-duration: 0.5s;

  &:hover {
    background-color: ${theme.colors.tertiary};
    transform: scale(1.1);
  }
`;

const warning = css`
  width: 100%;
  height: 100%;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.warning};
  color: ${theme.colors.lightGray3};
  border-radius: 8px 0px 0px 0px ${theme.colors.darkGray};
  transition-duration: 0.5s;

  &:hover {
    background-color: ${theme.colors.warning2};
    transform: scale(1.1);
  }
`;

const primary2 = css`
  width: 100%;
  height: 100%;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.lightGray3};
  color: ${theme.colors.primary};
  border-radius: 8px 0px 0px 0px ${theme.colors.darkGray};
  transition-duration: 0.5s;

  &:hover {
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    transform: scale(1.1);
  }
`;

const disabled2 = css`
  width: 100%;
  height: 100%;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.white};
  border: 1px solid #c92072a0;
  color: #c92072a0;
  border-radius: 8px 0px 0px 0px ${theme.colors.darkGray};
`;

const disabled = css`
  width: 100%;
  height: 100%;
  font-family: ${theme.fontFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.75px;
  text-align: center;
  border: none;
  border-radius: 8px;
  background-color: ${theme.colors.lightGray2};
  color: ${theme.colors.lightGray3};
  border-radius: 8px 0px 0px 0px ${theme.colors.darkGray};
`;

export const StyledButton = styled.button`
  cursor: pointer;
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "disabled":
        return disabled;
      case "warning":
        return warning;
      case "primary-2":
        return primary2;
      case "disabled-2":
        return disabled2;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

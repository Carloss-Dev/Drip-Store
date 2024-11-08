import styled, { css } from "styled-components";
import theme from "../../../../theme/theme";

const primary = css`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 20px;
  font-size: 16px;
  color: ${theme.colors.darkGray2};
  background-color: ${theme.colors.lightGray3};
  transition-duration: 0.2s;
  &:focus {
    box-shadow: 0 0 14px 0 ${theme.colors.darkGray2};
  }
`;

const primaryIcon = css`
  width: 100%;
  position: absolute;
  z-index: 100;
  height: 100%;
  border: none;
  outline: none;
  border-radius: 8px;
  padding-left: 20px;
  padding-right: 50px;
  font-size: 16px;
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
      case "primary-icon":
        return primaryIcon;
    }
  }}
  height: ${({ $height }) => $height};
`;

// Campo de input com label, e outras opcções

const normal = css`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
`;

const icon = css`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const StyledField = styled.div`
  ${({ $version }) => {
    switch ($version) {
      case "icon":
        return icon;
      case "normal":
        return normal;
    }
  }}
  height: ${({ $sizeH }) => $sizeH};
  width: ${({ $width }) => $width};
`;

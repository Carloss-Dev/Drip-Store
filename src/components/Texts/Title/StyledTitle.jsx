import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const large = css`
  font-family: ${theme.fontFamily};
  font-size: 64px;
  font-weight: 400;
  line-height: 66px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;

  @media (max-width: ${theme.media.xs}) {
    font-size: 48px;
    line-height: 50px;
  }
`;

const medium = css`
  font-family: ${theme.fontFamily};
  font-size: 48px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
  @media (max-width: ${theme.media.xs}) {
    font-size: 32px;
    line-height: 36px;
  }
`;

const small = css`
  font-family: ${theme.fontFamily};
  font-size: 32px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 1px;
  text-align: left;

  @media (max-width: ${theme.media.xs}) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const xSmall = css`
  font-family: ${theme.fontFamily};
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 2px;
  text-align: left;

  @media (max-width: ${theme.media.xs}) {
    font-size: 22px;
    line-height: 34px;
  }
`;

export const StyledTitle = styled.h3`
  ${({ $variant }) => {
    switch ($variant) {
      case "large":
        return large;
      case "medium":
        return medium;
      case "small":
        return small;
      case "x-small":
        return xSmall;
    }
  }}
  font-weight: ${({ $bold }) => ($bold ? "bold" : "normal")};
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

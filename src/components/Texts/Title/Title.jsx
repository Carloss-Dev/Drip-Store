import React from "react";
import { StyledTitle } from "./StyledTitle";

export const Title = ({
  bold = false,
  children,
  variant = "medium",
  width,
  height,
}) => {
  return (
    <StyledTitle
      $variant={variant}
      $bold={bold}
      $width={width}
      $height={height}
    >
      {children}
    </StyledTitle>
  );
};

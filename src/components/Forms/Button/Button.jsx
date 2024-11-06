import React from "react";
import { StyledButton } from "./StyledButton";

export const Button = ({
  variant = "primary",
  children,
  width,
  height,
  ...props
}) => {
  return (
    <StyledButton $width={width} $height={height} $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

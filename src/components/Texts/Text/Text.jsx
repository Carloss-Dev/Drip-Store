import React from "react";
import { StyledText } from "./StyledText";

export const Text = ({
  bold = false,
  children,
  variant = "medium",
  color,
  style,
}) => {
  return (
    <StyledText $variant={variant} $bold={bold} $color={color} style={style}>
      {children}
    </StyledText>
  );
};

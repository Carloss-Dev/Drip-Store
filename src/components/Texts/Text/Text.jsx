import React from "react";
import { StyledText } from "./StyledText";

export const Text = ({ bold = false, children, variant = "medium" }) => {
  return (
    <StyledText $variant={variant} $bold={bold}>
      {children}
    </StyledText>
  );
};

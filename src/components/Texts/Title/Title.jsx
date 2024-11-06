import React from "react";
import { StyledTitle } from "./StyledTitle";

export const Text = ({ bold = false, children, variant = "medium" }) => {
  return (
    <StyledTitle $variant={variant} $bold={bold}>
      {children}
    </StyledTitle>
  );
};

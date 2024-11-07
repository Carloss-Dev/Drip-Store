import React from "react";
import { StyledCheckbox } from "./StyledCheckbox";
import { Text } from "../../../Texts/Text/Text";

export const Checkbox = ({ children, variant = "primary" }) => {
  return (
    <Text variant="x-small">
      <label style={{ cursor: "pointer" }}>
        <StyledCheckbox $variant={variant} />
        {children}
      </label>
    </Text>
  );
};

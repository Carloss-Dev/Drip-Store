import React from "react";
import { StyledRadio } from "./StyledRadio";
import { Text } from "../../../Texts/Text/Text";

export const Radio = ({ children, variant = "primary" }) => {
  return (
    <Text variant="x-small">
      <label>
        <StyledRadio $variant={variant} />
        {children}
      </label>
    </Text>
  );
};

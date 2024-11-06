import React from "react";
import { StyledInput } from "./StyledInput";
import { Text } from "../../../Texts/Text/Text";

export const Input = ({ plh, variant = "primary", width, height }) => {
  return (
    <>
      <Text></Text>
      <StyledInput
        $variant={variant}
        $width={width}
        $height={height}
        placeholder={plh}
      />
    </>
  );
};

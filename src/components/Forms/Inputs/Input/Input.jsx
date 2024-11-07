import React from "react";
import { StyledField, StyledInput } from "./StyledInput";
import { Text } from "../../../Texts/Text/Text";

export const Input = ({
  plh,
  variant = "primary",
  width,
  height,
  children,
  version = "normal",
  id,
  sizeH,
  ...props
}) => {
  return (
    <StyledField $width={width} $version={version} $sizeH={sizeH}>
      <Text variant="x-small" bold={true}>
        <label htmlFor={id}>{children}</label>
      </Text>
      <StyledInput
        $variant={variant}
        $height={height}
        id={id}
        placeholder={plh}
        {...props}
      />
    </StyledField>
  );
};

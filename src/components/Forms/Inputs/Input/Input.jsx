import React from "react";
import * as S from "./StyledInput";
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
    <S.Field $width={width} $version={version} $sizeH={sizeH}>
      <Text variant="x-small" bold={true}>
        <label htmlFor={id}>{children}</label>
      </Text>
      <S.Input
        $variant={variant}
        $height={height}
        id={id}
        placeholder={plh}
        {...props}
      />
    </S.Field>
  );
};

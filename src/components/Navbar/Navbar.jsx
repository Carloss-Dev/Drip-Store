import React from "react";
import * as S from "./StyledNavbar";
import { Link } from "react-router-dom";
import { Text } from "../Texts/Text/Text";

export const Navbar = ({ variant = "primary" }) => {
  const links = ["Home", "Produtos", "Categorias", "Meus Pedidos"];
  return (
    <S.Navbar $variant={variant}>
      {links.map((link) => (
        <Text key={link}>
          <Link style={S.linkStyle}>{link}</Link>
        </Text>
      ))}
    </S.Navbar>
  );
};

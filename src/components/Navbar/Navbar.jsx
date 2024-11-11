import React from "react";
import * as S from "./StyledNavbar";
import { Link, useLocation } from "react-router-dom";
import { Text } from "../Texts/Text/Text";

const links = [
  {
    link: "Home",
    path: "/",
  },
  {
    link: "Produtos",
    path: "/produtos",
  },
  {
    link: "Categorias",
    path: "/categorias",
  },
  {
    link: "Meus Pedidos",
    path: "/pedidos",
  },
];

export const Navbar = ({ variant = "header-common" }) => {
  const location = useLocation();

  return (
    <S.Navbar $variant={variant} className="">
      {variant === "header-responsive" && <Text bold={true}>Páginas</Text>}
      {links.map(({ link, path }) => (
        <Text key={link}>
          <Link
            to={path}
            className={location.pathname === path ? "link-active" : ""}
          >
            {link}
          </Link>
        </Text>
      ))}
    </S.Navbar>
  );
};

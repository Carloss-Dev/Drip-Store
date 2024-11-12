import React from "react";
import * as S from "./StyledNavbar";
import { Link, useLocation } from "react-router-dom";
import { Text } from "../Texts/Text/Text";
import { Button } from "../Forms/Button/Button";

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

export const Navbar = ({ variant = "nav-common" }) => {
  const location = useLocation();

  if (variant === "nav-common")
    return (
      <S.Navbar $variant={variant}>
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
  if (variant === "nav-responsive")
    return (
      <S.Navbar $variant={variant}>
        <S.PositionContainer>
          <Text bold={true} style={{ paddingLeft: "3px" }}>
            Páginas
          </Text>
          <S.LinksContainer>
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
          </S.LinksContainer>
        </S.PositionContainer>
        <S.ButtonsContainer>
          <Button height="4rem">Entrar</Button>
          <Text>
            <Link style={{ color: "inherit" }}> Cadastre-se </Link>
          </Text>
        </S.ButtonsContainer>
      </S.Navbar>
    );
};

import React from "react";
// Styled
import * as S from "./StyledHeader";
// Externos
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
// Componentes
import { Input } from "../Forms/Inputs/Input/Input";
import { Navbar } from "../Navbar/Navbar";
import { Text } from "../Texts/Text/Text";
import { Button } from "../Forms/Button/Button";
import { Burger } from "..//Burger/Burger";

import Logo from "../../../public/Logo";
import CartIcon from "../../../public/Cart-Icon";

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

export const Header = ({ variant }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <S.Header $variant={variant}>
      <S.MainContainer>
        <Burger>
          <Navbar variant="nav-responsive" />
        </Burger>
        <Logo id="logo" />
        <Input
          plh="Pesquisar Produto ..."
          sizeH="6rem"
          width="60%"
          version="icon"
          variant="primary-icon-header"
        >
          <Icon
            icon="mynaui:search"
            width="3rem"
            className="search"
            id="normal-search"
          />
        </Input>
        <S.loginContainer>
          <Text>
            <Link style={{ color: "inherit" }}> Cadastre-se </Link>
          </Text>
          <Button width="11.4rem" height="4rem">
            Entrar
          </Button>
        </S.loginContainer>
        <S.iconContainer>
          <Icon
            icon="mynaui:search"
            width="3rem"
            className={` search ${isOpen ? "open" : ""}`}
            id="responsive-search"
            onClick={() => setIsOpen(!isOpen)}
          />
          {/* <CartIcon /> */}
        </S.iconContainer>
      </S.MainContainer>
      <S.AnimatedContainer className={isOpen ? "open" : ""}>
        <Input
          plh="Pesquisar Produto ..."
          sizeH="6rem"
          width="80%"
          version="icon-responsive"
          variant="primary-icon-header"
        >
          <Icon
            icon="mynaui:search"
            width="3rem"
            className="search"
            id="normal-search"
          />
        </Input>
      </S.AnimatedContainer>
      <Navbar variant="nav-common" />
    </S.Header>
  );
};

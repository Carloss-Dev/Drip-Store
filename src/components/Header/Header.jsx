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
import Logo from "../../../public/Logo";
import CartIcon from "../../../public/CART-ICON";

export const Header = ({ variant }) => {
  const [active, setActive] = React.useState("active");

  return (
    <S.Header $variant={variant}>
      <S.MainContainer>
        <Logo />
        <Input
          plh="Pesquisar Produto ..."
          sizeH="6rem"
          width="55.9rem"
          version="icon"
          variant="primary-icon"
        >
          <button>
            <Icon
              icon="mynaui:search"
              width="3rem"
              style={S.HeaderSearchStyle1}
            />
          </button>
        </Input>
        <S.loginContainer>
          <Text>
            <Link style={{ color: "inherit" }}> Cadastre-se </Link>
          </Text>
          <Button width="11.4rem" height="4rem">
            {" "}
            Entrar{" "}
          </Button>
        </S.loginContainer>
        <S.iconContainer>
          <Icon icon="mynaui:search" width="3rem" />
          <CartIcon />
        </S.iconContainer>
      </S.MainContainer>
      <Navbar />
    </S.Header>
  );
};

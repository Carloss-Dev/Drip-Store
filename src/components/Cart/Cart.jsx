import React from "react";
// Styled
import * as S from "./StyledCart";
// Externos

// Componentes
import { Text } from "../Texts/Text/Text";
import CartIcon from "../../../public/ICons/Cart-Icon";
import { Button } from "../Forms/Button/Button";
import { Card } from "../Card/Card";
import { theme } from "../../theme/theme";

export const Cart = () => {
  const [isActive, setIsActive] = React.useState(false);
  const cartArea = React.useRef();
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (cartArea.current && !cartArea.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    if (isActive) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);
  return (
    <S.CartContainer ref={cartArea}>
      <CartIcon className="cart-icon" onClick={() => setIsActive(!isActive)} />
      <S.DropdownContainer className={isActive && "ativo"}>
        <S.TitlePosition>
          <Text bold={true}>Meu Carrinho</Text>
        </S.TitlePosition>
        <S.CartContent>Contêudo aqui</S.CartContent>
        <S.CartPanel>
          <S.PanelValue>
            <Text variant="small" bold={true}>
              Valor Total:
            </Text>
            <Text variant="small" bold={true} color={theme.colors.error}>
              Preço total
            </Text>
          </S.PanelValue>
          <S.PanelButtons>
            <Text decoration="underline" color={theme.colors.darkGray2}>
              Esvaziar
            </Text>
            <Button height="4rem" width="12.478rem">
              Ver Carrinho
            </Button>
          </S.PanelButtons>
        </S.CartPanel>
      </S.DropdownContainer>
    </S.CartContainer>
  );
};

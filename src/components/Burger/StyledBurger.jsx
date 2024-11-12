import styled, { keyframes } from "styled-components";
import { theme } from "../../theme/theme";

// Elementos padrões do componente
export const TopLine = styled.div``;
export const CenterLine = styled.div``;
export const BottomLine = styled.div``;

// Principais
export const OutsideArea = styled.section`
  display: none;
  &.open {
    display: block;
    position: fixed;
    top: 11rem;
    left: 0;
    z-index: 200;
    width: 100vw;
    height: 100vh;
    background: #00000085;
    transition: 0.5s;
    @media (min-width: ${theme.media.md}) {
      display: none;
    }
  }
`;
export const Navigation = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  z-index: 400;
  left: -500px;
  z-index: 500;

  height: calc(100vh - 10.9rem);
  box-shadow: -2px 46px 11px 1px ${theme.colors.darkGray};
  width: 25rem;
  background-color: ${theme.colors.white};
  transition: 0.5s;
  &.open {
    left: 0;
  }
  @media (min-width: ${theme.media.md}) {
    display: none;
  }
`;

export const Burger = styled.button`
  display: flex;
  border: none;

  background-color: transparent;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  gap: 5px;
  width: 8%;
  height: 30%;
  max-width: 4rem;
  max-height: 4rem;

  ${TopLine} {
    background-color: ${theme.colors.darkGray};
    width: 100%;
    height: 12%;
    border-radius: 8px;
    transition: all 0.3s ease-in;
  }
  ${CenterLine} {
    background-color: ${theme.colors.darkGray};
    width: 100%;
    height: 10%;
    border-radius: 8px;
    transition: all 0.3s ease-in;
  }
  ${BottomLine} {
    background-color: ${theme.colors.darkGray};
    width: 100%;
    height: 12%;
    border-radius: 8px;
    transition: all 0.3s ease-in;
  }

  /* &.open {
    position: fixed;
    transform: translateY(-50%);
    z-index: 600;
     top: 20px;
    left: 55px; 
  }  */

  &.open ${TopLine} {
    transform: rotate(45deg) translate(10px, 5px);
  }
  &.open ${CenterLine} {
    background-color: transparent;
  }
  &.open ${BottomLine} {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  @media (min-width: ${theme.media.md}) {
    display: none;
  }
`;

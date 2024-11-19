import styled, { css, keyframes } from "styled-components";

export const TextContainer = styled.div``;
export const ImageContainer = styled.div``;
export const DivContainer = styled.div``;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

// Animação quando o item entra da direita para a esquerda
const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

export const CarouselItem = styled.div`
  animation: ${({ $animate, $direction }) =>
    $animate
      ? css`
          ${$direction === "left"
            ? slideInFromRight
            : slideInFromLeft} .8s ease-in-out forwards
        `
      : "none"};
`;

const home = css`
  align-self: center;
  border: 1pt solid red;
  width: 100%;
  height: 68.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  overflow: hidden;
  ${CarouselItem} {
    border: 1pt solid green;
    width: 95%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${TextContainer} {
      border: 1pt solid blue;
      width: 40%;
      height: 100%;
      gap: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    ${ImageContainer} {
      height: 100%;
      width: 50%;
      border: 1pt solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        transform: rotate(-20deg);
      }
    }
    ${DivContainer} {
      height: 100%;
      width: 10%;
    }
  }
`;

export const _Carousel = styled.section`
  ${({ $variant }) => {
    switch ($variant) {
      case "home":
        return home;
      default:
        return null;
    }
  }}
`;

import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme/theme";

export const TextContainer = styled.div``;
export const ImageContainer = styled.div``;
export const DotContainer = styled.div``;
export const DivContainer1 = styled.div``;
export const DivContainer2 = styled.div``;
export const ArrowLeft = styled.button``;
export const ArrowRight = styled.button``;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

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
  width: 100%;
  grid-column: 1 / 13;

  height: 68.1rem;
  gap: 10px;
  display: grid;
  grid-template-columns: 50px repeat(10, 1fr) 50px;
  grid-template-rows: 1fr 54.4rem 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: hidden;

  ${CarouselItem} {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2 / 12;
    grid-row: 2 / 3;

    ${TextContainer} {
      width: 50%;
      height: 100%;
      gap: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    ${ImageContainer} {
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      ${DivContainer1} {
        height: 100%;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 90%;
          transform: rotate(-20deg);
        }
      }
      ${DivContainer2} {
        height: 100%;
        width: 10%;
      }
    }

    // Media para tablets do item do carrossel
    @media (max-width: ${theme.media.md}) {
      flex-direction: column;
      grid-row: 1 / 3;

      ${TextContainer} {
        width: 100%;
        height: 60%;
        align-items: center;
        justify-content: center;
        text-align: center;
        h3 {
          width: 100%;
          text-align: center;
        }
      }

      ${ImageContainer} {
        width: auto;
        width: 100%;
        height: 40%;
        order: -1;

        ${DivContainer1} {
          img {
            width: 56%;
          }
        }
      }
    }

    //Media para detalhes especificos
    @media (min-width: 480px) and (max-width: 530px) {
      ${TextContainer} {
        gap: 0;
      }
    }

    // Media para celulares do item de carrossel
    @media (max-width: ${theme.media.xs}) {
      ${TextContainer} {
        align-items: center;
        justify-content: center;
        text-align: center;
        height: 70%;

        h3 {
          width: 100%;
          text-align: center;
        }
        button {
          width: 100%;
        }
        p {
          text-align: center;
        }
        p:nth-child(1) {
          color: ${theme.colors.primary};
        }
      }

      ${ImageContainer} {
        height: 30%;
        ${DivContainer1} {
          img {
            width: 90%;
          }
        }
      }
    }
  }
  // media para celulares da estrutura total
  @media (max-width: ${theme.media.xs}) {
    height: 66.2rem;
  }

  // Media para tablets da estrutura total
  @media (max-width: ${theme.media.md}) {
    grid-template-columns: 20px repeat(10, 1fr) 20px;
    grid-template-rows: 1fr 59.4rem 1fr;
  }

  ${ArrowLeft} {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    grid-row: 1/4;
    height: 100%;
    width: 100%;
    opacity: 0;
    border: none;
    color: ${theme.colors.darkGray2};
    background-color: transparent;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }

  ${ArrowRight} {
    display: flex;
    align-items: center;
    justify-content: center;
    grid-row: 1/4;
    opacity: 0;
    height: 100%;
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition-duration: 0.5s;
    color: ${theme.colors.darkGray2};
    &:hover {
      opacity: 1;
    }
  }

  ${DotContainer} {
    width: 100%;
    height: 100%;
    grid-row: 3 / 4;
    grid-column: 2 / 12;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    li {
      list-style: none;
      background-color: ${theme.colors.lightGray2};
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;

      &.active {
        background-color: ${theme.colors.primary};
      }
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

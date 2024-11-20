import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme/theme";

export const TextContainer = styled.div``;
export const ImageContainer = styled.div``;
export const DivContainer = styled.div``;
export const DotContainer = styled.div``;

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
  border: 1pt solid red;
  width: 100%;
  height: 68.1rem;
  gap: 10px;

  /* display: flex;
  align-items: center;
  justify-content: center; */

  display: grid;
  grid-template-columns: 50px repeat(10, 1fr) 50px;
  grid-template-rows: 1fr 54.4rem 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  overflow: hidden;

  ${CarouselItem} {
    border: 1pt solid green;
    /* width: 95%; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2 / 12;
    grid-row: 2 / 3;

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
      width: 52%;
      border: 1pt solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 90%;
        transform: rotate(-20deg);
      }
    }
    ${DivContainer} {
      height: 100%;
      width: 8%;
    }
  }

  button:nth-child(1) {
    grid-row: 1/4;
    height: 100%;
    width: 100%;
    opacity: 0;
  }

  button:nth-child(3) {
    grid-row: 1/4;
    height: 100%;
    opacity: 0;
    width: 100%;
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

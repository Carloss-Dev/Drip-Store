import styled, { css } from "styled-components";

export const CarouselItem = styled.div``;
export const TextContainer = styled.div``;
export const ImageContainer = styled.div``;

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
      width: 50%;
      height: 100%;
    }

    ${ImageContainer} {
      height: 100%;
      width: 40%;
      border: 1pt solid black;
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

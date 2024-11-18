import React from "react";
import * as S from "./StyledCarousel";

export const Carousel = ({ variant = "home" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const carouselItems = [
    { id: 1, content: "Item 1 - Imagem ou conteúdo aqui" },
    { id: 2, content: "Item 2 - Imagem ou conteúdo aqui" },
    { id: 3, content: "Item 3 - Imagem ou conteúdo aqui" },
  ];

  const goToPrevious = () => {
    const newIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <S._Carousel $variant={variant}>
      <button onClick={goToPrevious}>⟨</button>

      <S.CarouselItem>
        <S.TextContainer></S.TextContainer>
        <S.ImageContainer></S.ImageContainer>
      </S.CarouselItem>
      <button onClick={goToNext}>⟩</button>
    </S._Carousel>
  );
};

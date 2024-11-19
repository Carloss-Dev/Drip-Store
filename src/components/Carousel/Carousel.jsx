import React from "react";
import * as S from "./StyledCarousel";
import Ornament from "../../../public/Ornament";
import { Text } from "../Texts/Text/Text";
import { theme } from "../../theme/theme";
import { Title } from "../Texts/Title/Title";
import { Button } from "../Forms/Button/Button";

export const Carousel = ({ variant = "home" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const [direction, setDirection] = React.useState("left");

  React.useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 800);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  const carouselItems = [
    {
      id: 1,
      mainText: "Queima de stoque Nike 🔥",
      subText: "Melhores ofertas personalizadas",
      desc: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      image: "../../../public/Slides/slide1.png",
    },
    {
      id: 2,
      mainText: "Sapato do Carlos 🔥",
      subText: "Melhores ofertas personalizadas",
      desc: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      image: "../../../public/Slides/slide2.png",
    },
    {
      id: 3,
      mainText: "Queima de stoque Nike 🔥",
      subText: "Melhores ofertas personalizadas",
      desc: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      image: "../../../public/Slides/slide3.png",
    },
  ];

  const goToPrevious = () => {
    setDirection("left");
    setAnimate(true);
    const newIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    setDirection("right");
    setAnimate(true);
    const newIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <S._Carousel $variant={variant}>
      <button onClick={goToPrevious}>⟨</button>

      <S.CarouselItem
        $animate={animate}
        $currentIndex={currentIndex}
        $direction={direction}
      >
        <S.TextContainer>
          <Text variant="small" bold={true} color={theme.colors.warning}>
            {carouselItems[currentIndex].subText}
          </Text>
          <Title variant="large" bold={true} width="47rem">
            {carouselItems[currentIndex].mainText}
          </Title>
          <Text> {carouselItems[currentIndex].desc}</Text>
          <Button width="22rem" height="4.8rem">
            Ver Ofertas
          </Button>
        </S.TextContainer>
        <S.ImageContainer>
          <img src={carouselItems[currentIndex].image} alt="" />
        </S.ImageContainer>
        <S.DivContainer>
          <Ornament />
        </S.DivContainer>
      </S.CarouselItem>

      <button onClick={goToNext}>⟩</button>
    </S._Carousel>
  );
};

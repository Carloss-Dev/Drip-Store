import React from "react";
import * as S from "./StyledCarousel";
import Ornament from "../../../public/Ornament";
import { Text } from "../Texts/Text/Text";
import { theme } from "../../theme/theme";
import { Title } from "../Texts/Title/Title";
import { Button } from "../Forms/Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Carousel = ({ variant = "home" }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [animate, setAnimate] = React.useState(false);
  const [direction, setDirection] = React.useState("left");
  const [isDisable, setIsDisable] = React.useState(false);

  React.useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIsDisable(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 2500);

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    {
      id: 4,
      mainText: "Uepa 🔥",
      subText: "Melhores ofertas personalizadas",
      desc: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
      image: "../../../public/Slides/slide4.png",
    },
  ];

  function goToPrevious() {
    setIsDisable(true);
    setDirection("left");
    setAnimate(true);
    const newIndex =
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    setIsDisable(true);
    setDirection("right");
    setAnimate(true);
    const newIndex =
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToDot(index) {
    setDirection(currentIndex > index ? "left" : "right");

    setAnimate(true);
    setCurrentIndex(index);
  }

  return (
    <S._Carousel $variant={variant}>
      <S.ArrowLeft onClick={goToPrevious} disabled={isDisable}>
        <Icon icon="weui:arrow-filled" width="80%" />
      </S.ArrowLeft>

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
          <S.DivContainer1>
            <img src={carouselItems[currentIndex].image} alt="" />
          </S.DivContainer1>

          <S.DivContainer2>
            <Ornament />
          </S.DivContainer2>
        </S.ImageContainer>
      </S.CarouselItem>

      <S.ArrowRight onClick={goToNext} disabled={isDisable}>
        <Icon icon="weui:arrow-filled" width="80%" />
      </S.ArrowRight>

      <S.DotContainer>
        {carouselItems.map((dot, index) => (
          <li
            key={dot.id}
            onClick={() => goToDot(index)}
            className={index === currentIndex ? "active" : ""}
          ></li>
        ))}
      </S.DotContainer>
    </S._Carousel>
  );
};

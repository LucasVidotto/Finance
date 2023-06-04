import React, { useState, useEffect } from 'react';
import {
  BackgroundImage,
  BackgroundOverlay,
  CarouselBackground,
  CarouselImages,
  CarouselText,
  CarouselWrapper,
  Comece,
  Container,
  ContainerNav,
  DivLogo,
  Explore,
  LogIn,
  LogoCarte,
  Navbar,
  NextButton,
  PreviousButton
} from './Styles/homeStyled';
const Carrossel: React.FC = () => {
  const images = [
    "https://s3.amazonaws.com/cdn.catarse/assets/banner-aila.jpg",
    "https://s3.amazonaws.com/cdn.catarse/assets/brey-banner.jpg",
    "https://s3.amazonaws.com/cdn.catarse/assets/banner-institutipiano.jpg",
    "https://s3.amazonaws.com/cdn.catarse/assets/livrodospassaros%3Dbanner.jpg",
  ];

  const texts = [
    "Texto Um",
    "Texto Dois",
    "Texto Tres",
    "Imagem Numero Quatro",
  ];

  const Titles=[
    "Primeiro Titulo",
    "Mais Titulo Teste",
    "Terceiro TItulo",
    "E ultimo Titulo",
  ];
  const Logo = "https://www.catarse.me/assets/catarse_bootstrap/logo_big.png";

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 100000);
    return () => clearInterval(interval);
  }, []);

  const goToNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <Container>
      <CarouselBackground>
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <BackgroundImage
              src={image}
              alt="Imagem do Carrossel"
              style={{ display: index === currentImage ? 'block' : 'none' }}
            />
            {index === currentImage && <BackgroundOverlay />}
          </React.Fragment>
        ))}
      </CarouselBackground>
      <Navbar>
        <ContainerNav>
          <DivLogo>
            <LogoCarte src={Logo} alt="Logo Image"/>
          </DivLogo>
          <Comece>Comece seu projeto</Comece>
          <Explore>Explore</Explore>
          
        </ContainerNav>
        <LogIn>
          <a href="#">Login</a>
        </LogIn>
      </Navbar>
      <CarouselWrapper>
        <CarouselImages>
        </CarouselImages>
      </CarouselWrapper>
      <CarouselText>
        <h1>{Titles[currentImage]}</h1>
        {texts[currentImage]}
        <button>More Info</button>
      </CarouselText>
      <PreviousButton onClick={goToPreviousImage}>{'<'}</PreviousButton>
      <NextButton onClick={goToNextImage}>{'>'}</NextButton>
    </Container>
  );
};

export default Carrossel;

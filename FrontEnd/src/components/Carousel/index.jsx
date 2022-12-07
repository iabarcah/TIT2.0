import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import styles from "./styles.module.scss";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = ({ children, height, width }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={80}
      naturalSlideHeight={35}
      totalSlides={React.Children.count(children)}
      className={styles.carousel}
      infinite
    >
      <Slider className={styles.slider}>
        {React.Children.map(children, (child, index) => {
          return (
            <Slide index={index} key={index}>
              {React.cloneElement(child, {
                style: {
                  ...child.props.style,
                  height: "99%",
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "cover",
                },
              })}
            </Slide>
          );
        })}
      </Slider>
      <ButtonBack
        className={styles.btn}
        style={{ left: "1rem", top: 0, bottom: 0, margin: "auto" }}
      >
        ←
      </ButtonBack>
      <ButtonNext
        className={styles.btn}
        style={{ right: "1rem", top: 0, bottom: 0, margin: "auto" }}
      >
        →
      </ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;

import Image from "next/image";

import { useEffect, useState } from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.scss";

const Carousels = ({ carousels }) => {
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselSlider} data-carouselslider>
        <Carousel>
          {carousels.map((carousel) => {
            return (
              <Carousel.Item interval={5000}>
                <div className={styles.slide} data-slide data-active>
                  <Image
                    src={carousel.carousel_image}
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Carousel.Caption>
                  <h3>{carousel.carousel_heading}</h3>
                  <p>{carousel.carousel_description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousels;

import Image from "next/image";

import { useEffect, useState } from "react";

import styles from "./Carousel.module.scss";

const Carousel = () => {
  let counter = 0;
  const [carouselSlider, setCarouselSlider] = useState();
  const [slides, setSlides] = useState([]);
  const [size, setSize] = useState();
  const next = () => {
    counter++;
    if (slides && carouselSlider) {
      if (counter >= slides.length) counter = 0;
      carouselSlider.style.transform = `translateX(${-size * counter}px`;
    }
  };
  const prev = () => {
    counter--;
    if (slides && carouselSlider) {
      if (counter < 0) counter = slides.length - 1;
      carouselSlider.style.transform = `translateX(${-size * counter}px`;
    }
  };

  const autoPlay = () => {};
  setInterval(() => {
    next();
  }, 6000);

  useEffect(() => {
    const cslider = document.querySelector("[data-carouselslider]");
    setCarouselSlider(cslider);
    const islides = document.querySelectorAll("[data-slide]");
    setSlides(islides);
    setSize(islides[0].clientWidth);
  }, []);
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselSlider} data-carouselslider>
        <div className={styles.slide} data-slide data-active>
          <Image
            src="https://via.placeholder.com/1300x300/0000FF/808080"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://via.placeholder.com/1300x300/fff888/803080"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://via.placeholder.com/1300x300/eee666/608080"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://via.placeholder.com/1300x300/eded45/308080"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <button className={styles.prevBtn} data-prev onClick={prev}>
        <ion-icon name="caret-back-outline"></ion-icon>
      </button>
      <button className={styles.nextBtn} data-next onClick={next}>
        <ion-icon name="caret-forward-outline"></ion-icon>
      </button>
    </div>
  );
};

export default Carousel;

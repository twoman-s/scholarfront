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
            src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ab_deloitte__1648018465898.png"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ds_ab__1648039243267.png"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/wharton_dweb__1648188231810.png"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.slide} data-slide>
          <Image
            src="https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/ab_mba__1648018663354.png"
            alt="placeholder"
            layout="fill"
            objectFit="contain"
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

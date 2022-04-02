import Image from "next/image";

import { useEffect, useState } from "react";

import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Carousel.module.scss";

const Carousels = () => {
  let counter = 0;
  const [carouselSlider, setCarouselSlider] = useState();
  const [slides, setSlides] = useState([]);
  const [size, setSize] = useState();
  var handle = null;
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

  const autoPlay = () => {
    handle = setInterval(() => {
      next();
    }, 6000);
  };
  const onHover = () => {
    clearInterval(handle);
    handle = null;
  };
  const onHoverOut = () => {
    autoPlay();
  };
  // useEffect(() => {
  //   const cslider = document.querySelector("[data-carouselslider]");
  //   setCarouselSlider(cslider);
  //   const islides = document.querySelectorAll("[data-slide]");
  //   setSlides(islides);
  //   setSize(islides[0].clientWidth);
  // }, []);
  // useEffect(() => {
  //   autoPlay();
  // }, [slides]);
  var cstyle = {
    height: "100",
    background: "blue",
  };
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselSlider} data-carouselslider>
        <Carousel>
          <Carousel.Item interval={5000}>
            <div className={styles.slide} data-slide data-active>
              <Image
                src="https://via.placeholder.com/1300x300"
                alt="placeholder"
                layout="fill"
              />
            </div>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={styles.slide} data-slide>
              <Image
                src="https://via.placeholder.com/1300x300"
                alt="placeholder"
                layout="fill"
              />
            </div>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <div className={styles.slide} data-slide>
              <Image
                src="https://via.placeholder.com/1300x300"
                alt="placeholder"
                layout="fill"
              />
            </div>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* <div className={styles.slide} data-slide>
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
      </div>
      <button className={styles.prevBtn} data-prev onClick={prev}>
        <ion-icon name="caret-back-outline"></ion-icon>
      </button>
      <button className={styles.nextBtn} data-next onClick={next}>
        <ion-icon name="caret-forward-outline"></ion-icon>
      </button> */}
      </div>
    </div>
  );
};

export default Carousels;

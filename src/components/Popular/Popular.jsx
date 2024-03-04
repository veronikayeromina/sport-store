import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import { PopularBox } from "./PopularBox";
import { PopularCard } from "./PopularCard";

const popularCard = [
  {
    src: "./i/rectangle-14.png",
    alt: "popular1",
  },

  {
    src: "./i/rectangle-15.png",
    alt: "popular2",
  },

  {
    src: "./i/rectangle-13.png",
    alt: "popular3",
  },
  {
    src: "./i/rectangle-14.png",
    alt: "popular1",
  },

  {
    src: "./i/rectangle-15.png",
    alt: "popular2",
  },

  {
    src: "./i/rectangle-13.png",
    alt: "popular3",
  },
];

export function Popular() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      spaceBetween: 10,
      breakpoints: {
        100: {
          slidesPerView: 2,
        },
        576: {
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: ".popular__swiper_arrow-right",
        prevEl: ".popular__swiper_arrow-left",
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <section className="popular container">
      <PopularBox
        title="Popular Picks"
        subtitle=" Our popular picks for most favorited Nike Men’s & Women’s shoes."
      />

      <swiper-container ref={swiperRef} class="popular__swiper" init="false">
        {popularCard.map((card, index) => (
          <swiper-slide key={index}>
            <PopularCard src={card.src} alt={card.alt} />
          </swiper-slide>
        ))}
      </swiper-container>
    </section>
  );
}

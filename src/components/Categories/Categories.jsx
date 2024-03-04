import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import { SectionHeader } from "../UI/SectionHeader";
import { CategoriesCard } from "./CategoriesCard";

const categoriesCard = [
  {
    img: "./i/Frame 15.png",
    title: "Hoodies & Sweetshirt",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 16.png",
    title: "Shoes & Sneakers",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 22.png",
    title: "Tees & T-Shirt",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 16.png",
    title: "Shoes & Sneakers",
    subtitle: "Explore Now!",
  },
  {
    img: "./i/Frame 15.png",
    title: "Hoodies & Sweetshirt",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 16.png",
    title: "Shoes & Sneakers",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 22.png",
    title: "Tees & T-Shirt",
    subtitle: "Explore Now!",
  },

  {
    img: "./i/Rectangle 16.png",
    title: "Shoes & Sneakers",
    subtitle: "Explore Now!",
  },
];

export function Categories() {
  const swiperRef = useRef(null);

  useEffect(() => {
    register();

    const params = {
      spaceBetween: 16,
      breakpoints: {
        100: {
          slidesPerView: 1.3,
        },
        576: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 24,
        },
      },
    };

    Object.assign(swiperRef.current, params);

    swiperRef.current.initialize();
  }, []);

  return (
    <section className="categories">
      <div className="categories__box">
        <SectionHeader title="Explore more categories" />

        <swiper-container ref={swiperRef} class="categories__swiper">
          {categoriesCard.map((card, index) => (
            <swiper-slide key={index}>
              <CategoriesCard
                src={card.img}
                title={card.title}
                subtitle={card.subtitle}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
}

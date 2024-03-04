import { SectionHeader } from "../UI/SectionHeader";
import { ProductsBlock } from "./ProductsBlock";
import { ProductsForm } from "./ProductsForm";

const productsBlock = [
  {
    img: "i/i03 1.png",
    href: "https://www.instagram.com/",
    alt: "product1",
  },

  {
    img: "i/Rectangle 10.png",
    href: "https://www.instagram.com/",
    alt: "product2",
  },

  {
    img: "i/Rectangle 7.png",
    href: "https://www.instagram.com/",
    alt: "product3",
  },

  {
    img: "i/image 29.png",
    href: "https://www.instagram.com/",
    alt: "product4",
  },

  {
    img: "i/image 28.png",
    href: "https://www.instagram.com/",
    alt: "product5",
  },

  {
    img: "i/Rectangle 9.png",
    href: "https://www.instagram.com/",
    alt: "product6",
  },
];

export function Products() {
  return (
    <section className="products">
      <div className="container products__box">
        <SectionHeader title="Follow products on Instagram" />

        <div className="products__cards">
          {productsBlock.map((card, index) => (
            <ProductsBlock
              key={index}
              src={card.img}
              href={card.href}
              alt={card.alt}
            />
          ))}
        </div>

        <ProductsForm />
      </div>
    </section>
  );
}

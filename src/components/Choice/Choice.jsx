import { ChoiceCard } from "./ChoiceCard";

const choiceCard = [
  {
    img: "./i/air-zoom-pegasus-37.png",
    name: "Air Max pegasus 37",
    price: "$189",
    category: "Women’s Running shoe",
    bgColor: "pink",
  },

  {
    img: "./i/air-max-90-flyease.png",
    name: "Air Max 90 FlyEase",
    price: "$189",
    category: "Men’s Sneakers",
    bgColor: "dark_blue",
  },

  {
    img: "./i/air-max-270-react-se.png",
    name: "Air max 270 React SE",
    price: "$189",
    category: "Men’s Shoe",
    bgColor: "green",
  },

  {
    img: "./i/cosmic-unity.png",
    name: "Nike cosmic unity",
    price: "$189",
    category: "Men’s Basketball Shoe",
    bgColor: "blue",
  },
];

export function Choice() {
  return (
    <section className="container choice">
      <div className="choice__cards">
        {choiceCard.map((card, index) => (
          <ChoiceCard
            key={index}
            name={card.name}
            img={card.img}
            price={card.price}
            category={card.category}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </section>
  );
}

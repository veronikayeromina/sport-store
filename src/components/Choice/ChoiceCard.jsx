import { ChoiceStars } from "./ChoiceStars";

export function ChoiceCard({ img, name, price, category, bgColor }) {
  return (
    <div className="choice__card">
      <div className={`choice__img bg-${bgColor}`}>
        <img src={img} className="choice__shoes" />
      </div>

      <div className="choice__content">
        <h5 className="choice__title">{name}</h5>
        <ChoiceStars />

        <div className="choice__price">{price}</div>
        <h6 className="choice__subtitle">{category}</h6>
        <button className="choice__btn">Add to Cart</button>
      </div>
    </div>
  );
}

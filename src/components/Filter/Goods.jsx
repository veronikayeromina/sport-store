import { GoodsCard } from "./GoodsCard";
import { goodsCard } from "./mock";

export function Goods() {
  return (
    <section className="goods">
      <div className="container">
        <div className="goods__cards">
          {goodsCard.map((card) => (
            <GoodsCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              price={card.price}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

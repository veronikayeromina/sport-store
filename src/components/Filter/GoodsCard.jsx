import { Link } from "react-router-dom";

export function GoodsCard({ img, title, subtitle, price, id }) {
  return (
    <div className="goods__card">
      <div className="goods__img">
        <img src={img} className="goods__img-shoes" alt={title} />
      </div>
      <div className="goods__content">
        <div className="goods__content-text">
          <h5 className="goods__title">{title}</h5>
          <p className="goods__subtitle">{subtitle}</p>
        </div>

        <div className="goods__content-row">
          <div className="goods__price">{price}</div>
          <Link to={`/product/${id}`} className="btn goods__btn">
            shop now
          </Link>
        </div>
      </div>
    </div>
  );
}

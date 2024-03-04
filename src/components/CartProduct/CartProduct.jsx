import { Link } from "react-router-dom";
import ButtonDelete from "../../components/ButtonDelete/ButtonDelete";
import Count from "../../components/Count/Count";
import formatPrice from "../../utils/priceFormatter";
import "./style.scss";

const Product = ({
  product,
  deleteProduct,
  increase,
  changeValue,
  decrease,
}) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={img} alt={title} />
      </div>
      <Link to={`/product/${id}`}>
        <h2 className="product__title">{title}</h2>
      </Link>

      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          changeValue={changeValue}
          id={id}
        />
      </div>
      <h3 className="product__price">{formatPrice(priceTotal)} грн</h3>
      <div className="product__controls">
        <ButtonDelete deleteProduct={deleteProduct} id={id} />
      </div>
    </section>
  );
};

export default Product;

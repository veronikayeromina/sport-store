import "./style.scss";
import formatPrice from "../../utils/priceFormatter";
import { useCart } from "../CartProvider/CartProvider";

const CartFooter = () => {
  const { cart } = useCart();

  const total = cart.reduce(
    (acc, current) => {
      acc.count += current.count;
      acc.price += current.priceTotal;

      return acc;
    },
    { count: 0, price: 0 }
  );

  const { count, price } = total;

  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} ед.</div>
      <div className="cart-footer__price">{formatPrice(price)} грн</div>
    </footer>
  );
};

export default CartFooter;

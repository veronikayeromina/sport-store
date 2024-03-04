import { ReactComponent as BagIcon } from "/public/i/bag-icon.svg";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <h2 className="empty__cart_header">Корзина</h2>
      <div className="empty__cart">
        <div className="empty__cart_block">
          <BagIcon />
          <h3 className="empty__cart_title">Ваша корзина - пуста</h3>
        </div>
        <h3 className="empty__cart_subtitle">
          Посмотрите наше актуальное предложение. Вы уж точно найдёте там что-то
          интересное!
        </h3>

        <Link to="/" className="btn empty__cart_button">
          На главную
        </Link>
      </div>
    </>
  );
};

export default EmptyCart;

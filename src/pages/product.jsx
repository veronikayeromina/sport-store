import { useState, useEffect } from "react";
import { ProductPageStar } from "../components/ProductPage/ProductPageStar";
import { ProductTabs } from "../components/ProductPage/ProductTabs";
import { Button } from "../components/UI/Button";
import { useNavigate, useParams } from "react-router-dom";
import { goodsCard } from "../components/Filter/mock";
import { useCart } from "../components/CartProvider/CartProvider";
import { useFavorite } from "../components/FavoriteProvider/FavoriteProvider";

export function ProductPage() {
  const [state, setState] = useState({});

  const { id } = useParams();

  const { addProduct, cart } = useCart();

  const { addFavorite, favorite, deleteFavorite } = useFavorite();

  const navigate = useNavigate();

  const isProductInCart = cart.some((item) => item.id === state.id);

  const isFavorite = favorite.some((item) => item.id === state.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFavorite(state.id);
      return;
    }
    addFavorite(state);
  };

  useEffect(() => {
    const product = goodsCard.find((item) => item.id === id);

    if (!product) return navigate("/");

    setState(product);
  }, []);

  return (
    <section className="product-page">
      <div className="container product-page__container ">
        <div className="product-page__shoes">
          <img src={state.img} className="product-page-img" alt="shoes" />
        </div>
        <div className="product-page__content">
          <div className="product-page__header">
            <h4 className="product-page__title">{state.title}</h4>
            <h5 className="product-page__subtitle">{state.subtitle}</h5>
          </div>

          <div className="product-page__img">
            <button onClick={toggleFavorite}>
              <img
                src={
                  isFavorite
                    ? "/public/i/heart-filled.svg"
                    : "/public/i/heart.svg"
                }
                className="product-page__hurt"
                alt="heart"
              />
            </button>
          </div>
        </div>
        <div className="product-page__block">
          <div className="product-page__review">
            <ProductPageStar />

            <p className="product-page__review_title">4.6 star rating </p>
            <span>|</span>
            <p className="product-page__review_subtitle">See 7 Reviews</p>
          </div>

          <div className="product-page__wrapper">
            <div className="product-page__select">
              <p className="product-page__price">{state.price}</p>
            </div>
            <Button
              className="product-page__btn"
              onClick={() => addProduct(state)}
            >
              {isProductInCart ? "уже в корзине" : "add to cart"}
            </Button>
          </div>
        </div>

        <ProductTabs />
      </div>
    </section>
  );
}

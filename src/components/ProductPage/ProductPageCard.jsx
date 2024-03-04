import { ReactComponent as ArrowIcon } from "/public/i/vector 72.svg";

export function ProductPageCard({ title, img, alt, isActive, onClick }) {
  return (
    <button
      className={`product-page__card ${isActive ? "active" : ""} `}
      onClick={onClick}
    >
      <img src={img} alt={alt} className="product-page__icon" />

      <div className="product-page__box">
        <ArrowIcon className="product-page__arrow" />
        <h6 className="product-page__desc">{title}</h6>
      </div>
    </button>
  );
}

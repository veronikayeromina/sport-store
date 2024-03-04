import { ReactComponent as StarIconYellow } from "/public/i/star.svg";

export function ProductPageStar() {
  return (
    <div className="product-page__stars">
      <StarIconYellow width={16} height={16} />
      <StarIconYellow width={16} height={16} />
      <StarIconYellow width={16} height={16} />
      <StarIconYellow width={16} height={16} />
    </div>
  );
}

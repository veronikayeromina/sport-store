import { ReactComponent as StarIconYellow } from "/public/i/star.svg";
import { ReactComponent as StarIconGrey } from "/public/i/star-grey.svg";

export function ChoiceStars() {
  return (
    <div className="choice__stars">
      <StarIconYellow width={12} height={12} />
      <StarIconYellow width={12} height={12} />
      <StarIconYellow width={12} height={12} />
      <StarIconGrey width={12} height={12} />
    </div>
  );
}

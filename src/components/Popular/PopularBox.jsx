import { ReactComponent as ArrowIconLeft } from "/public/i/Iconly-Light-Outline-Combined-Shape.svg";

export function PopularBox({ title, subtitle }) {
  return (
    <div className="popular__box">
      <div className="popular__header">
        <h4 className="popular__title">{title}</h4>
        <p className="popular__subtitle">{subtitle}</p>
      </div>

      <div className="popular__buttons">
        <button className="popular__swiper_arrow-left">
          <ArrowIconLeft />
        </button>

        <button className="popular__swiper_arrow-right">
          <ArrowIconLeft />
        </button>
      </div>
    </div>
  );
}

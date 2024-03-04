import { Link } from "react-router-dom";
import { ReactComponent as ArrowIconCategories } from "/public/i/Arrow 1.svg";

export function CategoriesCard({ src, title, subtitle, href = "#" }) {
  return (
    <Link to={href} className="categories__card">
      <div className="categories__photo">
        <img src={src} className="categories__img" />
      </div>

      <div className="categories__card-block">
        <div className="categories__card-header">
          <h4 className="categories__card-title">{title}</h4>
          <p className="categories__card-subtitle">{subtitle}</p>
        </div>

        <ArrowIconCategories className="categories__arrow" />
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";

export function BoxItem({ children, href, percent }) {
  return (
    <li className="header-box__item">
      {percent && <span className="header__label">{percent}</span>}

      <Link to={href} className="header__nav_link">
        {children}
      </Link>
    </li>
  );
}

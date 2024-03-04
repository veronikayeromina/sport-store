import { Link } from "react-router-dom";

export function FooterListItem({ children, href }) {
  return (
    <li className="footer-box__item">
      <Link to={href} className="footer__nav_link">
        {children}
      </Link>
    </li>
  );
}

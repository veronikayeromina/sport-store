import { Link } from "react-router-dom";

export function SubheaderItem({ href, children }) {
  return (
    <li className="subnav-box__item">
      <Link to={href} className="subheader__nav_link">
        {children}
      </Link>
    </li>
  );
}

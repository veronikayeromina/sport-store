export function FooterList({ children, title }) {
  return (
    <ul className="footer__list">
      <li className="footer-box__item">
        <h5 className="footer__nav-title">{title}</h5>
      </li>
      {children}
    </ul>
  );
}

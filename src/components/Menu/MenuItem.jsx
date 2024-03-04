export function MenuItem({ children, percent, href }) {
  return (
    <li className="menu__nav-item">
      <a href={href} className="menu__nav-link">
        {children}
      </a>
      {percent && <span className="menu__label">{percent}</span>}
    </li>
  );
}

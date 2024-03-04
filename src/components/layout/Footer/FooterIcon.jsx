export function FooterIcon({ children, href }) {
  return (
    <a href={href} target="_blank" className="footer__social-box">
      {children}
    </a>
  );
}

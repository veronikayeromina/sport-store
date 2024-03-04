import { ReactComponent as InstIcon } from "/public/i/inst.svg";

export function ProductsBlock({ src, alt, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="products__block">
      <img src={src} className="products__img" alt={alt} />
      <div className="products__icon">
        <InstIcon />
      </div>
    </a>
  );
}

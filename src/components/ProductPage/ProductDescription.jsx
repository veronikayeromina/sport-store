export function ProductDescription({ title, subtitle }) {
  return (
    <div className="product-description">
      <h6 className="product-description__title">{title}</h6>
      <p className="product-description__subtitle">{subtitle}</p>
    </div>
  );
}

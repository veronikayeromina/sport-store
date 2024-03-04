export function PopularCard({ src, alt }) {
  return (
    <div className="popular__card">
      <img src={src} className="popular__img" alt={alt} />
    </div>
  );
}

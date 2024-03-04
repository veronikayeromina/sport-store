export function SectionHeader({ title, subtitle }) {
  return (
    <header className="section__header">
      <h3 className="section__title">{title}</h3>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
    </header>
  );
}

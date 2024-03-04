import { ReactComponent as ArrowIconBenefits } from "/public/i/arrow-down.svg";

export function BenefitsBlock({ title }) {
  return (
    <div className="benefits__block">
      <ArrowIconBenefits />
      <p className="benefits__title">{title}</p>
    </div>
  );
}

import { BenefitsBlock } from "./BenefitsBlock";

export function Benefits() {
  return (
    <section className="benefits">
      <div className="container benefits__box">
        <BenefitsBlock title="Duties and Taxes Guaranteed" />

        <BenefitsBlock title="Free Express Shipping" />
        <BenefitsBlock title="Customer Love" />

        <BenefitsBlock title="Easy Returns" />
      </div>
    </section>
  );
}

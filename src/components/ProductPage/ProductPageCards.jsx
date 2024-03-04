import { ProductPageCard } from "./ProductPageCard";

export function ProductPageCards({ tab, setTab }) {
  return (
    <div className="product-page__cards">
      <ProductPageCard
        img="/public/i/cil_list-rich.svg"
        alt="alt"
        title="description"
        isActive={tab === "description"}
        onClick={() => setTab("description")}
      />

      <ProductPageCard
        img="/public/i/fluent_box-16-regular.svg"
        alt="alt"
        title="specifications"
        isActive={tab === "specifications"}
        onClick={() => setTab("specifications")}
      />

      <ProductPageCard
        img="/public/i/mdi_progress-star.svg"
        alt="alt"
        title="reviews"
        isActive={tab === "reviews"}
        onClick={() => setTab("reviews")}
      />

      <ProductPageCard
        img="/public/i/carbon_delivery.svg"
        alt="alt"
        title="delivery"
        isActive={tab === "delivery"}
        onClick={() => setTab("delivery")}
      />
    </div>
  );
}

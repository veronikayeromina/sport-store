import { ProductDescription } from "./ProductDescription";
import { ProductPageCards } from "./ProductPageCards";
import { useState } from "react";

const tabs = {
  description: {
    title: "Description",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium laudantium ad doloremque tenetur voluptates voluptas quidem sed labore earum, ex autem doloribus dignissimos. Vitae quis alias at voluptas nulla error quaerat doloribus ex sunt? Nobis sit, hic non earum similique consectetur accusamus deleniti ducimus voluptates quam amet suscipit quo veritatis pariatur ratione, aliquam, ab minus? Totam ex obcaecati fuga, doloribus architecto molestiae ut rerum nihil numquam quas? Corporis, laudantium iure cupiditate ipsam rerum iusto aliquid quis tempora reprehenderit nemo aut praesentium repellat quos esse fuga assumenda! Illo veniam ipsam sit, similique nesciunt deleniti soluta quae natus eos ex aliquid!",
  },

  specifications: {
    title: "Specifications",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium laudantium ad doloremque tenetur voluptates voluptas quidem sed labore earum, ex autem doloribus dignissimos. Vitae quis alias at voluptas nulla error quaerat doloribus ex sunt? Nobis sit, hic non earum similique consectetur accusamus deleniti ducimus voluptates quam amet suscipit quo veritatis pariatur ratione, aliquam, ab minus? Totam ex obcaecati fuga, doloribus architecto molestiae ut rerum nihil numquam quas? Corporis, laudantium iure cupiditate ipsam rerum iusto aliquid quis tempora reprehenderit nemo aut praesentium repellat quos esse fuga assumenda! Illo veniam ipsam sit, similique nesciunt deleniti soluta quae natus eos ex aliquid!",
  },

  reviews: {
    title: "Reviews",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium laudantium ad doloremque tenetur voluptates voluptas quidem sed labore earum, ex autem doloribus dignissimos. Vitae quis alias at voluptas nulla error quaerat doloribus ex sunt? Nobis sit, hic non earum similique consectetur accusamus deleniti ducimus voluptates quam amet suscipit quo veritatis pariatur ratione, aliquam, ab minus? Totam ex obcaecati fuga, doloribus architecto molestiae ut rerum nihil numquam quas? Corporis, laudantium iure cupiditate ipsam rerum iusto aliquid quis tempora reprehenderit nemo aut praesentium repellat quos esse fuga assumenda! Illo veniam ipsam sit, similique nesciunt deleniti soluta quae natus eos ex aliquid!",
  },

  delivery: {
    title: "Delivery",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium laudantium ad doloremque tenetur voluptates voluptas quidem sed labore earum, ex autem doloribus dignissimos. Vitae quis alias at voluptas nulla error quaerat doloribus ex sunt? Nobis sit, hic non earum similique consectetur accusamus deleniti ducimus voluptates quam amet suscipit quo veritatis pariatur ratione, aliquam, ab minus? Totam ex obcaecati fuga, doloribus architecto molestiae ut rerum nihil numquam quas? Corporis, laudantium iure cupiditate ipsam rerum iusto aliquid quis tempora reprehenderit nemo aut praesentium repellat quos esse fuga assumenda! Illo veniam ipsam sit, similique nesciunt deleniti soluta quae natus eos ex aliquid!",
  },
};

export function ProductTabs() {
  const [tab, setTab] = useState("description");

  return (
    <>
      <ProductPageCards tab={tab} setTab={setTab} />

      <ProductDescription
        title={tabs[tab].title}
        subtitle={tabs[tab].subtitle}
      />
    </>
  );
}

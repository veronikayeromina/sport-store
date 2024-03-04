import CartFooter from "../components/CartFooter/CartFooter";
import CartHeader from "../components/CartHeader/CartHeader";
import Product from "../components/CartProduct/CartProduct";
import { useCart } from "../components/CartProvider/CartProvider";
import EmptyCart from "../components/EmptyCart/EmptyCart";

export function CartPage() {
  const { cart, deleteProduct, increase, decrease, changeValue } = useCart();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <section className="cart">
      <CartHeader />

      {cart.map((product) => {
        return (
          <Product
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
          />
        );
      })}

      <CartFooter />
    </section>
  );
}

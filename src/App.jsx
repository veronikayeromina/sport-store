import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import { Layout } from "./components/layout/Layout";
import { ProductPage } from "./pages/product";
import { CartProvider } from "./components/CartProvider/CartProvider";
import { FavoriteProvider } from "./components/FavoriteProvider/FavoriteProvider";
import { CartPage } from "./pages/cart";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/product/:id", element: <ProductPage /> },
      { path: "/cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  return (
    <FavoriteProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </FavoriteProvider>
  );
}

export default App;

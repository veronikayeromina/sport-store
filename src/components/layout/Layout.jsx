import { useEffect } from "react";
import { Subheader } from "./Subheader/Subheader";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Subheader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

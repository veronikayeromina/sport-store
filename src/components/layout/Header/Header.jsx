import { useState } from "react";
import { Menu } from "../../Menu/Menu";
import { BoxItem } from "./BoxItem";
import { ReactComponent as LogoIcon } from "/public/i/nike.svg";
import { ReactComponent as SearchIcon } from "/public/i/search-icon.svg";
import { ReactComponent as BagIcon } from "/public/i/bag-icon.svg";
import { ReactComponent as MenuIcon } from "/public/i/icons8-menu.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../CartProvider/CartProvider";

const headerList = [
  {
    href: "#",
    percent: "20%",
    text: "Men",
  },

  {
    href: "#",
    text: "Women",
  },

  {
    href: "#",
    text: "Kids",
  },

  {
    href: "#",
    text: "Customise",
  },

  {
    href: "#",
    text: "Sale",
  },

  {
    href: "#",
    text: "Shipping",
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header container">
        <Link to="/" className="header__logo">
          <LogoIcon className="header__nike" />

          <span className="header__title">Nikki</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__list">
            {headerList.map((item, index) => (
              <BoxItem key={index} percent={item.percent} href={item.href}>
                {item.text}
              </BoxItem>
            ))}
          </ul>
        </nav>

        <div className="header__icons">
          <button className="header__icon">
            <SearchIcon />
          </button>

          <Link to="/cart" className="header__icon">
            {cart.length !== 0 && (
              <span className="header__icon_number">{cart.length}</span>
            )}
            <BagIcon />
          </Link>

          <MenuIcon className="header__burger" onClick={onMenuClick} />
          {/* <img
            src="../i/icons8-menu.svg"
            className="header__burger"
            onClick={onMenuClick}
          /> */}
        </div>
      </div>

      <Menu isOpen={isOpen} onMenuClick={onMenuClick} />
    </header>
  );
}

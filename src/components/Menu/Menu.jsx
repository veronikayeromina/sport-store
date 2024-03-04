import { ReactComponent as LogoIcon } from "/public/i/nike.svg";
import { ReactComponent as CloseIcon } from "/public/i/close.svg";
import { MenuItem } from "./MenuItem";

const navList = [
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

  {
    href: "#",
    text: "Guides",
  },

  {
    href: "#",
    text: "Terms of Sale",
  },

  {
    href: "#",
    text: "Terms of Use",
  },

  {
    href: "#",
    text: "Privacy & Policy",
  },
];

export function Menu({ isOpen, onMenuClick }) {
  return (
    <div className={`menu__backdrop ${isOpen ? "menu__open" : "menu__close"} `}>
      <section className="menu">
        <div className="menu__header">
          <div className="header__logo">
            <a href="#">
              <LogoIcon className="menu__nike" />
            </a>
          </div>

          <button onClick={onMenuClick}>
            <CloseIcon className="menu__close-button" />
          </button>
        </div>

        <nav className="menu__nav">
          <ul className="menu__nav-list">
            {navList.map((item, index) => (
              <MenuItem key={index} href={item.href} percent={item.percent}>
                {item.text}
              </MenuItem>
            ))}

            <MenuItem href="#">
              Login
              <span> / </span>
              Register
            </MenuItem>
          </ul>
        </nav>
      </section>
    </div>
  );
}

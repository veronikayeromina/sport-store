import { FooterIcon } from "./FooterIcon";
import { FooterList } from "./FooterList";
import { FooterListItem } from "./FooterListItem";
import { ReactComponent as LogoIcon } from "/public/i/nike.svg";
import { ReactComponent as FacebookIcon } from "/public/i/facebook.svg";
import { ReactComponent as InstagramIcon } from "/public/i/instagram.svg";
import { ReactComponent as TwitterIcon } from "/public/i/twitter.svg";
import { ReactComponent as LinkedinIcon } from "/public/i/in.svg";
import { Link } from "react-router-dom";

const socialIcons = [
  {
    href: "https://uk-ua.facebook.com",
    Icon: <FacebookIcon className="footer__icons" />,
  },
  {
    href: "https://www.instagram.com",
    Icon: <InstagramIcon className="footer__icons" />,
  },
  {
    href: "https://twitter.com/?lang=ru",
    Icon: <TwitterIcon className="footer__icons" />,
  },
  {
    href: "https://www.linkedin.com",
    Icon: <LinkedinIcon className="footer__icons" />,
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__block">
          <Link to="/" className="footer__logo">
            <LogoIcon className="footer__nike" />

            <span className="footer__title">Nikki</span>
          </Link>

          <p className="footer__subtitle">
            Complete your style with awesome clothes from us.
          </p>

          <div className="footer__social">
            {socialIcons.map((social, index) => (
              <FooterIcon key={index} href={social.href}>
                {social.Icon}
              </FooterIcon>
            ))}
          </div>
        </div>

        <nav className="footer__nav">
          <FooterList title="Company">
            <FooterListItem href="#">About</FooterListItem>
            <FooterListItem href="#">Contacts us</FooterListItem>
            <FooterListItem href="#">Support</FooterListItem>
            <FooterListItem href="#">Careers</FooterListItem>
          </FooterList>

          <FooterList title="Quick Link">
            <FooterListItem href="#">Share Location</FooterListItem>
            <FooterListItem href="#">Orders Tracking</FooterListItem>
            <FooterListItem href="#">Size Guide</FooterListItem>
            <FooterListItem href="#">FAQs</FooterListItem>
          </FooterList>

          <FooterList title="Legal">
            <FooterListItem href="#">Terms & conditions</FooterListItem>
            <FooterListItem href="#">Privacy Policy</FooterListItem>
          </FooterList>
        </nav>
      </div>
    </footer>
  );
}

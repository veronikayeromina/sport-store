import { SubheaderItem } from "./SubheaderItem";
import { SubheaderList } from "./SubheaderList";

export function Subheader() {
  return (
    <section className="subheader">
      <div className="container subheader__container">
        <nav className="subheader__nav">
          <SubheaderList>
            <SubheaderItem href="#">Guides</SubheaderItem>
            <SubheaderItem href="#"> Terms of Sale</SubheaderItem>
            <SubheaderItem href="#">Terms of Use</SubheaderItem>
            <SubheaderItem href="#">Privacy & Policy</SubheaderItem>
          </SubheaderList>
        </nav>

        <div className="subheader__title">
          <p>Complimentary Standard Shipping Canada Wide</p>
        </div>

        <div className="subheader__buttons">
          <button>Login</button>
          <span> /</span>
          <button>Register</button>
        </div>
      </div>
    </section>
  );
}

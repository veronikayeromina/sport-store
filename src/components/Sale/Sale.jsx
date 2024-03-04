import { Button } from "../UI/Button";

export function Sale() {
  return (
    <section className="sale">
      <div className="sale__box">
        <div className="sale__photo">
          <img src="./i/payday-sale-img.jpg" />
        </div>

        <div className="sale__content">
          <h2 className="sale__span">
            <span className="sale__gradient">PAYDAY</span>
          </h2>
          <h3 className="sale__title">sale now</h3>

          <p className="sale__subtitle">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="sale__date">1 June - 10 June 2023</p>
          <p className="sale__terms">*Terms & Conditions apply</p>

          <Button className="sale__btn">SHOP NOW</Button>
        </div>
      </div>
    </section>
  );
}

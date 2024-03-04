import { Button } from "../UI/Button";

export function About() {
  return (
    <section className="about container">
      <div className="about__cards">
        <div className="about__img_left">
          <div className="about__header">
            <h4 className="about__title">About the Brand</h4>
            <p className="about__subtitle">
              The world&apos;s largest athletic apparel company.Nike is best
              known for its footwear, apparel, and equipment.
            </p>

            <Button className="about__btn">SHOP NOW</Button>
          </div>
          <img src="./i/Mask group.png" className="about__img about__girl" />
        </div>

        <div className="about__photo">
          <img src="./i/mask-group.png" className="about__img" />
          <img src="./i/Mask-group3.png" className="about__img" />
        </div>
      </div>
    </section>
  );
}

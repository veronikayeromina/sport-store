import { Button } from "../UI/Button";
import { ReactComponent as ButtonIcon } from "/public/i/ic-play.svg";

export function Hero() {
  return (
    <section className="container hero">
      <div className="hero__header">
        <h2 className="hero__transparent">the new 2023</h2>
        <h1 className="hero__filled">air jordan</h1>
      </div>

      <div className="hero__box">
        <img src="i/main.png" className="hero__img" />

        <section className="hero__cta">
          <p className="hero__desc">We know how large objects will act,</p>

          <div className="hero__block">
            <Button className="hero__btn">Shop now</Button>

            <button className="hero__button">
              <ButtonIcon className="hero__play" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

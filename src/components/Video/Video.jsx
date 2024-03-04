import { useState } from "react";
import { ReactComponent as VideoIcon } from "/public/i/Vector 72.svg";

export function Video() {
  const [isOpen, setIsOpen] = useState(false);

  const onVideoClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="video">
      <div className="video-container">
        <div className="video__block">
          {isOpen ? (
            <iframe
              className="video__iframe"
              src="https://www.youtube.com/embed/MzYYUGnmqLA"
            />
          ) : (
            <>
              <img src="./i/video-img.jpg" alt="video" className="video__img" />
              <button className="video__btn" onClick={onVideoClick}>
                <span className="video__span">Play Video</span>
                <VideoIcon className="video__play" />
              </button>
            </>
          )}
        </div>

        <div className="video__content">
          <h4 className="video__title">
            What it means to be a woman in sports?
          </h4>

          <p className="video__desc">
            The ability to drive gender equality by teaching women and girls
            teamwork, self-reliance, resilience and confidence. Women in sport
            defy gender stereotypes and social norms, make inspiring role
            models, and show men and women as equals.
          </p>
        </div>
      </div>
    </section>
  );
}

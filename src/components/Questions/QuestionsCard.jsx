import { useState } from "react";
import { ReactComponent as CloseIconQuestions } from "/public/i/close.svg";

export function QuestionsCard({ title, subtitle }) {
  const [isOpen, setIsOpen] = useState(true);

  const onCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="questions__card">
      <button className="questions__block" onClick={onCardClick}>
        <h4 className="questions__card-title">{title}</h4>

        <CloseIconQuestions
          className={`questions__img ${isOpen ? "" : "questions__plus"}`}
        />
      </button>

      {isOpen && <p className="questions__text">{subtitle}</p>}
    </article>
  );
}

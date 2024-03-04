import { SectionHeader } from "../UI/SectionHeader";
import { QuestionsCard } from "./QuestionsCard";

const questionsCard = [
  {
    title: "What services does TanahAir Offer?",
    subtitle:
      "TanahAir offers a service for creating a website design, illustration, icon set, website development, animation and digital marketing.",
  },

  {
    title:
      "How does TanahAir create website content without knowing our Business plan?",
    subtitle:
      "TanahAir will schedule interviews with customers who have used our services and discuss business about the product and help solve the problem so that it becomes the best solution.",
  },

  {
    title: "What often will results be reported?",
    subtitle:
      "We will report each section that has been done, such as Flow, wireframe for each category, then full wireframe until it becomes a complete design and we will report the development of the website approximately every 1 week.",
  },

  {
    title:
      "Why should i choose a Design studio like TanahAir over full-service agency?",
    subtitle:
      "Because TanahAir provides the best service to customers and provides flexibility to solve problems with our experts so that customers get satisfaction. And we provide service very quickly according to the price we offer",
  },

  {
    title: "What will be delivered? And When?",
    subtitle:
      "What will be given is a design and development to become a website for that time depending on the difficulties the client gives us.However, the track record we have done to create a website design and development will take about 1 month",
  },
  {
    title:
      "How Quickly will i start seeing result after working with TanahAir?",
    subtitle:
      "About 1 week there will be results that we give to clients.Because after the client makes payments we will begin to share a task with our workers and do the work as quickly as possible",
  },
];

export function Questions() {
  return (
    <section className="questions">
      <div className="container questions__box">
        <SectionHeader
          title="Quick Questions to ask"
          subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the"
        />

        <div className="questions__cards">
          <div className="questions__card-wrapper">
            {questionsCard.slice(0, 3).map((card, index) => (
              <QuestionsCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>

          <div className="questions__card-wrapper">
            {questionsCard.slice(3, 6).map((card, index) => (
              <QuestionsCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

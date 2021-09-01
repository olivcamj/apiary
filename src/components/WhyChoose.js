import { IconBoxCard } from "./IconBoxCard";
import { Wrapper } from "./Wrapper";
import CardBlock from "./CardBlock";

import image1 from "../images/quality.png";
import image2 from "../images/professionalism.png";
import image3 from "../images/delegate.png";

const whyChooseCards = [
  {
    iconBoxImage: image1,
    iconBoxTitle: "Quality",
    iconBoxText: "The Yandex search engine is the fourth ranked search engine in the world in terms of number of requests processed."
  },
  {
    iconBoxImage: image2,
    iconBoxTitle: "Professionalism",
    iconBoxText: "Practicum by Yandex is one of the most popular online education services in Russia, allowing students to get a new profession or master a new skill."
  },
  {
    iconBoxImage: image3,
    iconBoxTitle: "Experience",
    iconBoxText: "Our students are already working at Accenture, Tesla, Invitae. Our specialty is practical training for the real world."
  }
]

const WhyChoose = () => {
  return (
    <Wrapper dark>
      <CardBlock
        color="dark"
        title="Why choose us?"
        intro="We have built the largest IT company in Russia. We know how to develop cool employees, and we work hard to make our clients' lives better and happier."
        cards={whyChooseCards.map((card, i) => {
          return (
            <IconBoxCard
              key={i}
              iconBoxImage={card.iconBoxImage}
              iconBoxTitle={card.iconBoxTitle}
              iconBoxText={card.iconBoxText}
            />
          )
        })}
      />
    </Wrapper>
  );
};

export default WhyChoose;

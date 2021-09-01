import { Wrapper } from "./Wrapper";
import { IconBoxCard } from "./IconBoxCard";
import CardBlock from "./CardBlock";
import image1 from "../images/resource-saving.png";
import image2 from "../images/publicize.png";
import image3 from "../images/pr-boost.png";

const usefulCards = [
  {
    iconBoxImage: image1,
    iconBoxTitle: "Resource saving",
    iconBoxText: "Delegate tasks for free and get results that can be used in your future work."
  },
  {
    iconBoxImage: image2,
    iconBoxTitle: "Publicize",
    iconBoxText: "We take pride in the real-world value of the tasks that our students perform and we share them in all available channels."
  },
  {
    iconBoxImage: image3,
    iconBoxTitle: "PR boost",
    iconBoxText: "This will increase the visibility of the company among job seekers and attract those who share the values of your company."
  }
]

const Useful = () => {
  return (
    <Wrapper dark>
      <CardBlock
        color="dark"
        title="Why is it useful for your company?"
        intro="By handing over assignments to students for work, you free experienced employees from routine tasks, as well as increase brand awareness."
        cards={usefulCards.map((card, i) => {
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

export default Useful;

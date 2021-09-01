import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Card = styled.div`
  display: ${(props) => (props.hide ? "none" : "flex")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 580px;
  margin: 30px 0;

  @media (min-width: 1024px) and (max-width: 1150px) {
    margin: 40px 0;
    max-width: 460px;
  }

  @media screen and (max-width: 1023px) {
    display: flex;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const CardNumber = styled.p`
  font-size: 21px;
  line-height: 42px;
  text-align: center;
  width: 43px;
  height: 43px;
  border: 10px solid #fff;
  z-index: 10;
  border-radius: 50%;
  background-color: #FF9900;
  color: #fff;
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const CardTitle = styled.h3`
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #000;
  margin: 10px 0 30px 0;
`;

const CardText = styled.p`
  text-align: center;
  color: #616161;
  margin: 0;
  font-size: 20px;
  line-height: 30px;
`;

const TimelineCard = ({ image, number, title, text, hide }) => {
  return (
    <Fade duration={3000}>
      <Card hide={hide}>
        <CardImage src={image} />
        <CardNumber>{number}</CardNumber>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Card>
    </Fade>
  );
};

export default TimelineCard;

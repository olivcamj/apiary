import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Card = styled.div`
  display: ${props => props.hide ? "none" : "flex"};
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

const CardNumber = styled.img`
  width: 40px;
  height: 40px;
  display: none;

  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const CardTitle = styled.h3`
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
        <CardNumber src={number} />
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </Card>
    </Fade>
  )
}

export default TimelineCard;

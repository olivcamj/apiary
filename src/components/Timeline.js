import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import { Wrapper } from './Wrapper';
import number1 from '../images/circle1.svg';
import number2 from '../images/circle2.svg';
import number3 from '../images/circle3.svg';
import image1 from '../images/checklist.png';
import image2 from '../images/clarify.png';
import image3 from '../images/start-tasks.png';

const Title = styled.h2`
  font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  /* color: #FFFFFF; */
  margin: 0 auto;
  text-align: center;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 600px) {
      font-size: 34px;
      line-height: 40px;
  }

  @media screen and (max-width: 400px) {
      width: 288px; 
      font-size: 32px;
      line-height: 37px;
  }
`;

const TimelineWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(430px,1fr) 140px minmax(430px,1fr);
  width: 100%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: minmax(430px,1fr) 80px minmax(430px,1fr);
  }

  @media screen and (max-width: 1023px) {
    grid-template-columns: 1fr;
    box-sizing: content-box;
    width: auto;
  }
`;

const CardsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20%;

  @media (min-width: 1024px) and (max-width: 1150px) {
    padding-bottom: 5%;
  }

  @media screen and (max-width: 1023px) {
    align-items: center;
    padding-bottom: 0;
  }
`;

const CardsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 20%;

  @media (min-width: 1024px) and (max-width: 1150px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 1023px) {
    display: none;
`;

const Card = styled.div`
  display: ${props => props.right ? "none" : "flex"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 580px;
  margin: 30px 0;

  @media (min-width: 1024px) and (max-width: 1150px) {
    margin: 40px 0;
    max-width: 380px;
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
  margin: 30px 0 30px 0;
`;

const CardText = styled.p`
  text-align: center;
  color: #616161;
  margin: 0;
`;

const VerticalTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:after {
    content:"";
    position: absolute;
    left: 50%;
    top: 30%;
    height: 40%;
    width: 2px;
    background: #616161;
  }

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

const TimelineNumber = styled.img`
  width: 40px;
  height: 40px;
  border: 10px solid #fff;
  margin: 67px 0;
  z-index: 10;
`;

const Button = styled.button`
  width: fit-content;
  padding: 20px 60px;
  border-radius: 40px;
  border: none;
  background-color: #ff9900;
  color: white;
  font-size: 24px;
  line-height: 32px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  overflow: visible;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 1023px) {
    margin-top: 30px;
  }
`;

const Timeline = () => {
  return (
    <Wrapper>
      <Title>How to start?</Title>
      <TimelineWrapper>
        <CardsLeft>
          <Fade duration={3000}>
            <Card>
              <CardImage src={image1} />
              <CardNumber src={number1} />
              <CardTitle>Fill in the checklist</CardTitle>
              <CardText>So that we can understand your request and how we can help you</CardText>
            </Card>
          </Fade>
          <Fade duration={3000}>
            <Card right>
              <CardImage src={image2} />
              <CardNumber src={number2} />
              <CardTitle>We will clarify the details and connect the necessary experts</CardTitle>
              <CardText>We will help you formulate the request so that it&apos;s understandable to our students, and you will receive a high-quality solution in a timely manner</CardText>
            </Card>
          </Fade>
          <Fade duration={3000}>
            <Card>
              <CardImage src={image3} />
              <CardNumber src={number3} />
              <CardTitle>We will start solving your tasks</CardTitle>
              <CardText>Practicum by Yandex students will solve the task, then our curators check and correct their solutions. We&apos;ll send you the work. Additionally, if you wish, you may talk to the authors of the best solutions and invite them to join you</CardText>
            </Card>
          </Fade>
        </CardsLeft>
        <VerticalTimeline>
          <TimelineNumber src={number1} />
          <TimelineNumber src={number2} />
          <TimelineNumber src={number3} />
        </VerticalTimeline>
        <CardsRight>
          <Fade duration={3000}>
            <Card remove>
              <CardImage src={image2} />
              <CardNumber src={number2} />
              <CardTitle>We will clarify the details and connect the necessary experts</CardTitle>
              <CardText>We will help you formulate the request so that it&apos;s understandable to our students, and you will receive a high-quality solution in a timely manner</CardText>
            </Card>
          </Fade>
        </CardsRight>
      </TimelineWrapper>
      <Button orange>Delegate a task</Button>
    </Wrapper>
  )
};

export default Timeline;

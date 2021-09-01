import styled from 'styled-components';
import TimelineCard from './TimelineCard';
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
  padding-bottom: 10%;
  box-sizing: content-box;
  width: auto;

  @media screen and (max-width: 1339px) {
    padding-bottom: 3%;
  }

  @media (min-width: 1025px) and (max-width: 1150px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    align-items: center;
    padding-bottom: 0;
  }
`;

const CardsRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 10%;

  @media screen and (max-width: 1339px) {
    padding-bottom: 7%;
  }

  @media (min-width: 1024px) and (max-width: 1150px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 1023px) {
    display: none;
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
    <Wrapper name="timeline">
      <Title>How to start?</Title>
      <TimelineWrapper>
        <CardsLeft>
          <TimelineCard 
            image={image1}
            number={number1}
            title={'Fill in the checklist'}
            text={'So that we can understand your request and how we can help you'}
          />
          <TimelineCard
            hide={true}
            image={image2}
            number={number2}
            title={'We will clarify the details and connect the necessary experts'}
            text={'We will help you formulate the request so that it&apos;s understandable to our students, and you will receive a high-quality solution in a timely manner'}
          />
          <TimelineCard
            image={image3}
            number={number3}
            title={'We will start solving your tasks'}
            text={'Practicum by Yandex students will solve the task, then our curators check and correct their solutions. We&apos;ll send you the work. Additionally, if you wish, you may talk to the authors of the best solutions and invite them to join you'}
          />          
        </CardsLeft>
        <VerticalTimeline>
          <TimelineNumber src={number1} />
          <TimelineNumber src={number2} />
          <TimelineNumber src={number3} />
        </VerticalTimeline>
        <CardsRight>
          <TimelineCard
            image={image2}
            number={number2}
            title={'We will clarify the details and connect the necessary experts'}
            text={'We will help you formulate the request so that it&apos;s understandable to our students, and you will receive a high-quality solution in a timely manner'}
          />
        </CardsRight>
      </TimelineWrapper>
      <Button orange>Delegate a task</Button>
    </Wrapper>
  )
};

export default Timeline;

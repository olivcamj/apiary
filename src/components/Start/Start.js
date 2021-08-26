import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Start.css';
import styled from 'styled-components';
import { Wrapper } from '../Wrapper';
import number1 from '../../images/circle1.svg';
import number2 from '../../images/circle2.svg';
import number3 from '../../images/circle3.svg';
import image1 from '../../images/checklist.png';
import image2 from '../../images/clarify.png';
import image3 from '../../images/start-tasks.png';

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

const CardTitle = styled.h3`
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  color: #000;
  margin: 30px 0 38px 0;
`;

const CardText = styled.p`
  text-align: center;
  color: #616161;
`;

const Button = styled.button`
  margin-top: 60px;
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

  @media screen and (max-width: 779px) {
    margin-top: 30px;
  }
`;

const Start = () => {
  return (
    <Wrapper>
      <Title>How to start?</Title>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element"
          iconStyle={{ border: '10px solid #fff', boxShadow: 'none' }}
          icon={<img src={number1} alt="number 1" />}
        >
          <img src={image1} />
          <CardTitle>Fill in the checklist</CardTitle>
          <CardText>So that we can understand your request and how we can help you</CardText>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ border: '10px solid #fff', boxShadow: 'none' }}
          icon={<img src={number2} alt="number 2" />}
        >
          <img src={image2} />
          <CardTitle>We will clarify the details and connect the necessary experts</CardTitle>
          <CardText>We will help you formulate the request so that it&apos;s understandable to our students, and you will receive a high-quality solution in a timely manner</CardText>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ border: '10px solid #fff', boxShadow: 'none' }}
          icon={<img src={number3} alt="number 3" />}
        >
          <img src={image3} />
          <CardTitle>We will start solving your tasks</CardTitle>
          <CardText>Practicum by Yandex students will solve the task, then our curators check and correct their solutions. We&apos;ll send you the work. Additionally, if you wish, you may talk to the authors of the best solutions and invite them to join you</CardText>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <Button orange>Delegate a task</Button>
    </Wrapper>
  )
}

export default Start;

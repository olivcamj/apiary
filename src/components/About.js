import styled from "styled-components";
import { GlobalButton } from "./globalComponents/globalComponents";
import { Wrapper } from "./Wrapper";
import { LeftChatBubble, RightChatBubble } from "./ChatBubble";
import chatIcon from "../images/ChatIcon.png";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;

  @media screen and (max-width: 320px) {
    padding: 60px 0;
  }
`;

const Title = styled.h2`
  margin: 0 auto 80px auto;
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  overflow: hidden;
  align-self: center;
  display: inline-block;

  @media screen and (max-width: 700px) {
    font-size: 40px;
    line-height: 46px;
    margin: 0 auto 40px auto;
  }

  @media screen and (max-width: 600px) {
    font-size: 34px;
    line-height: 40px;
  }

  @media screen and (max-width: 560px) {
    width: 288px;
    font-size: 32px;
    line-height: 37px;
    margin: 0 auto 32px auto;
    text-align: center;
    width: 100%;
  }
`;

const ChatWrapper = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 340px) {
    padding: 0 6px;
  }
`;

const DelegateTaskButtonWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const DelegateButton = styled(GlobalButton)`
  max-width: 293px;
  width: 100%;
`;

const conversation = [
  {
    chatLeft: true,
    chatText:
      "Practicum by Yandex is a kind of boot camp. Our goal is to help ambitious and passionate people to master it and find their first job. At the same time, the level of our training allows graduates to carry out high-quality real projects of companies under the review of experienced mentors.",
  },
  {
    chatLeft: false,
    chatText: "Who will solve the problems? How much does it cost?",
  },
  {
    chatLeft: true,
    chatText:
      "It is a win-win situation: we take real tasks from real companies and give them to graduates of Data Science and Data Analytics courses. The results of these tasks will be repeatedly checked by curators and returned to the customer as ordered for free.",
  },
  {
    chatLeft: false,
    chatText: "Why is it free?",
  },
  {
    chatLeft: true,
    chatText:
      "Because Practicum has students who are eager to gain real life experience, find them interesting and useful, and are ready to take on your tasks",
  },
  {
    chatLeft: false,
    chatText: "Wow! I'm ready to start!",
  },
];

const About = () => {
  return (
    <Wrapper neutral>
      <Container name="about">
        <Title>What is Practicum by Yandex?</Title>
        <ChatWrapper>
          {conversation.map((element, i) => {
            return element.chatLeft ? (
              <LeftChatBubble
                key={i}
                src={chatIcon}
                chatText={conversation[i].chatText}
              />
            ) : (
              <RightChatBubble key={i} chatText={conversation[i].chatText} />
            );
          })}
        </ChatWrapper>

        <DelegateTaskButtonWrapper>
          <DelegateButton orange>Delegate a task</DelegateButton>
        </DelegateTaskButtonWrapper>
      </Container>
    </Wrapper>
  );
};

export default About;

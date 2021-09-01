import styled from "styled-components";
import { GlobalCard } from "./globalComponents/globalCard/globalCard";
import Fade from "react-reveal/Fade";

const LeftTextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  overflow: visible;
  align-self: flex-start;
  margin-bottom: 40px;
`;

const IconWrapper = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  overflow: visible;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const IconImage = styled.img`
  position: absolute;
  bottom: -25px;
`;

const OrangeCard = styled(GlobalCard).attrs({ className: "OrangeCard" })`
  margin-left: 40px;
  border-bottom-left-radius: 0;
  background-color: #ff9900;
  max-width: 840px;

  @media screen and (max-width: 1024px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 720px) {
    margin-left: 0;
  }

  @media screen and (max-width: 320px) {
  }

  @media screen and (max-width: 700px) {
    margin-left: 0;
  }
`;

const RightTextWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-content: center;
  overflow: visible;
  align-self: flex-end;
  margin-bottom: 40px;
  width: auto;
`;

const WhiteCard = styled(GlobalCard).attrs({ className: "WhiteCard" })`
  max-width: 554px;
  border-bottom-right-radius: 0;
  background-color: #fff;
  color: #000;

  @media screen and (max-width: 320px) {
    margin-left: 0;
  }
`;

export const LeftChatBubble = ({ key, src, chatText }) => {
  return (
    <Fade duration={3000}>
      <LeftTextWrapper key={key}>
        <IconWrapper>
          <IconImage src={src} />
        </IconWrapper>
        <OrangeCard chatText={chatText}></OrangeCard>
      </LeftTextWrapper>
    </Fade>
  );
};

export const RightChatBubble = ({ key, chatText }) => {
  return (
    <Fade duration={3000}>
      <RightTextWrapper key={key}>
        <WhiteCard chatText={chatText}></WhiteCard>
      </RightTextWrapper>
    </Fade>
  );
};

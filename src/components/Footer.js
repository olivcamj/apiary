import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Wrapper } from "./Wrapper.js";
import HoverComponent from "./hoverComponent/hoverComponent.js";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  position: relative;
  max-width: 1440px;
  margin: 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 100%;
  }

  @media screen and (max-width: 830px) {
    max-width: 830px;
  }

  @media screen and (max-width: 320px) {
    max-width: 320px;
    align-self: center;
  }
`;

const LeftDiv = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #dddddd;

  @media screen and (max-width: 1280px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 830px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 320px) {
    margin-bottom: 60px;
  }
`;

const AboutUs = styled(Link)`
  margin: 0 0 20px 0;
  cursor: pointer;
  
  @media screen and (max-width: 960px) {
    margin: 0 20px 0 0;
    width: 120px;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
  }

  @media screen and (max-width: 830px) {
    margin-bottom: 60px;
  }
`;

const Email = styled.p`
  margin: 0;
  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 830px) {
    width: auto;
    margin: 0 auto 10px auto;
  }
`;
const Linkedin = styled.a`
  color: #dddddd;
  text-decoration: none;
  margin: 0;
  @media screen and (max-width: 960px) {
    margin: 0 20px 0 0;
  }

  @media screen and (max-width: 830px) {
    width: auto;
    margin: 0 auto 10px auto;
  }
`;
const Tfn = styled.p`
  margin: 0;
  @media screen and (max-width: 960px) {
    margin: 0 20px 0 0;
  }

  @media screen and (max-width: 830px) {
    width: auto;
    margin: 0 auto 10px auto;
  }
`;

const CenterDiv = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    margin-bottom: 40px;
  }
`;

const FooterInfo = styled.div`
  width: 348px;
  height: 92px;
  background: #ffffff;
  border-radius: 14px;
  @media screen and (max-width: 380px) {
    max-width: 300px;
    width: 100%;
  }
`;

const Info = styled.p`
  width: 284px;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
  margin: 16px 32px;

  @media screen and (max-width: 380px) {
    width: 268px;
    font-size: 18px;
    margin: 16px;
  }
`;

const RightDiv = styled.div`
  position: relative;
  height: auto;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #dddddd;

  @media screen and (max-width: 1280px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 830px) {
    position: static;
    width: auto;
    margin: 0 auto;
  }
`;

const Top = styled.a`
  margin: 0;
  text-align: right;
  display: inline-block;
  text-decoration: none;
  color: #dddddd;

  @media screen and (max-width: 830px) {
    width: auto;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const Text = styled.p`
  margin: 0;
  width: 100%;
  text-align: right;
  align-self: flex-end;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 960px) {
    left: 0;
    width: auto;
  }

  @media screen and (max-width: 830px) {
    position: relative;
    width: auto;
    margin: 20px auto 0 auto;
  }
`;

const Footer = () => {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Wrapper dark>
      <Container>
        <LeftDiv>
          <AboutUs to="about" smooth={true}>About us</AboutUs>
          <Email>msgordienko@yandex-team.com</Email>
          <Linkedin
            target="_blank"
            href={"https://www.linkedin.com/school/practicum-by-yandex/"}
          >
            LinkedIn
          </Linkedin>
          <Tfn>+1-510-646-62-5</Tfn>
        </LeftDiv>

        <CenterDiv
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <FooterInfo>
            <Info>
              This website is developed by Practicum by Yandex’ students
            </Info>
          </FooterInfo>
        </CenterDiv>
        {isShown && <HoverComponent />}
        <RightDiv>
          <Top href={"#top"}>Back to top ↑</Top>
          <Text>© 2020 Practicum by Yandex</Text>
        </RightDiv>
      </Container>
    </Wrapper>
  );
};

export default Footer;

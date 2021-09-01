import React from "react";
import {
  Container,
  RightDiv,
  LeftDiv,
  CenterDiv,
  AboutUs,
  Email,
  Linkedin,
  Tfn,
  FooterInfo,
  Info,
  Top,
  Text,
} from "./footer.styles.js";
import { Wrapper } from "../Wrapper.js";
import HoverComponent from "../hoverComponent/hoverComponent.js";

const Footer = () => {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <Wrapper dark>
      <Container>
        <LeftDiv>
          <AboutUs>About us</AboutUs>
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

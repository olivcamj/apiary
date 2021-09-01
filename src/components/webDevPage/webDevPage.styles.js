import styled, { keyframes, css } from "styled-components";
import { GlobalCard } from '../globalComponents/globalCard/globalCard';
import { GlobalButton } from '../globalComponents/globalComponents';


export const IntroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  @media screen and (max-width: 1280px) {
    width: 620px;
    justify-content: space-between;
  }

  @media screen and (max-width: 800px) {
    width: 620px;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
    width: 288px;
    align-self: center;
  }
`;

export const TextWrapper = styled.div`
  width: 840px;
  height: auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    width: 620px;
    align-self: flex-start;
  }

  @media screen and (max-width: 800px) {
    width: 620px;
    align-self: center;
  }

  @media screen and (max-width: 620px) {
    width: 288px;
    align-self: center;
  }
`;

export const Title = styled.h2`
  width: 620px;
  margin: 0 0 40px 0;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  @media screen and (max-width: 1280px) {
    width: 453px;
    align-self: flex-start;
    font-size: 48px;
    line-height: 56px;
  }
  @media screen and (max-width: 800px) {
    max-width: 620px;
    align-self: center;
  }
  @media screen and (max-width: 620px) {
    width: 288px;
    align-self: center;
  }
`;

export const TextIntro = styled.p`
  width: 840px;
  margin: 0;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
  @media screen and (max-width: 1280px) {
    width: 453px;
    align-self: flex-start;
    font-size: 24px;
    line-height: 32px;
  }

  @media screen and (max-width: 800px) {
    max-width: 620px;
    align-self: center;
  }
  @media screen and (max-width: 620px) {
    width: 288px;
    align-self: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 267px;
  height: 217px;
  margin-left: 100px;

  @media screen and (max-width: 1280px) {
    margin-left: 0;
  }

  @media screen and (max-width: 800px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 620px) {
    width: 288px;
    align-self: center;
  }
`;

export const Image = styled.div`
  width: 267px;
  height: 217px;
  background-position: center center;
  background-repeat: no-repeat;
  position: absolute;
  top: -40px;
  right: 100px;
  @media screen and (max-width: 1280px) {
    right: 0;
  }
  @media screen and (max-width: 800px) {
    position: relative;
    top: 0;
  }
`;

// INFO CARDS

export const CardWrapper = styled.div`
    overflow: visible;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: 100px auto;
    row-gap: 40px;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        margin: 40px auto;
    }
`;

export const ProjectPageCard = styled(GlobalCard).attrs({
  className: "ProjectPageCard",
})`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  max-width: 400px;
  height: 348px;
  padding: 30px 20px;
  box-sizing: border-box;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;

  &:nth-child(2) {
    margin-left: 40px;
    margin-right: 40px;
  }

  @media screen and (max-width: 510px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;

    &:nth-child(2) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 320px) {
    &:nth-child(2) {
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const ProjectPageCardNumber = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: bold;
  font-size: 68px;
  line-height: 79px;
  text-align: center;
  color: #ff9900;
  margin: 0 auto;
  @media screen and (max-width: 510px) {
    font-size: 48px;
    line-height: 56px;
  }
`;

export const ProjectPageCardTitle = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #000000;
  margin: 16px auto 28px auto;

  @media screen and (max-width: 510px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ProjectPageCardText = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
  color: #000000;
  margin: 0 auto;

  @media screen and (max-width: 510px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

// PROJECTS INTRO

export const ProjectsIntroWrapper = styled.div`
  max-width: 1280px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 0 auto 60px auto;

  @media screen and (max-width: 960px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 400px) {
    width: 300px;
    margin: 0 auto 40px auto;
  }
`;

export const TextIntroWrapper = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }

  @media screen and (max-width: 400px) {
    width: 280px;
  }
`;

export const ProjectIntroTitle = styled.h2`
  width: 100%;
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 34px;
    line-height: 40px;
  }

  @media screen and (max-width: 400px) {
    width: 280px;
    font-size: 32px;
    line-height: 37px;
  }
`;

export const ProjectIntroText = styled.p`
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: #616161;
  margin: 40px 0 0 0;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ImageIntroWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }

  @media screen and (max-width: 320px) {
    width: 300px;
  }
`;

export const ImageProjectIntro = styled.img`
  max-width: 520px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 1280px) {
    max-width: 452px;
  }

  @media screen and (max-width: 400px) {
    max-width: 320px;
  }
`;

// PROJECT CARDS

export const ProjectCardWrapper = styled.div.attrs({
  className: "projectWrapper",
})`
  margin: 0 0 80px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1280px) {
    margin: 0 0 60px 0;
  }

  @media screen and (max-width: 960px) {
    margin: 0 auto 80px auto;
  }

  @media screen and (max-width: 730px) {
    margin: 0 auto 60px auto;
  }
`;

export const ProjectCard = styled(GlobalCard).attrs({
  className: "projectCard",
})`
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: #ffffff;
  width: 1280px;
  height: 378px;
  position: relative;
  margin: 0 0 20px 0;

  @media screen and (max-width: 1280px) {
    width: 945px;
    height: 365px;
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: 730px;
    width: 630px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 730px) {
    width: 300px;
    height: 498px;
    margin-bottom: 0;
  }
`;

export const CoverCard = styled(GlobalCard).attrs({ className: "coverCard" })`
  width: 630px;
  height: 378px;
  z-index: 1000;
  position: relative;
  background-color: transparent;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    width: 462px;
    height: 365px;
  }

  @media screen and (max-width: 960px) {
    width: 630px;
    height: 378px;
  }

  @media screen and (max-width: 730px) {
    width: 300px;
    height: 250px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const ProjectCover = styled.img`
  object-fit: fill;
  object-position: center center;
  border-radius: 14px;

  @media screen and (max-width: 960px) {
  }

  @media screen and (max-width: 730px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    height: 250px;
  }
`;

export const ProjectInfoWrapper = styled.div`
  width: 565px;
  margin: 32px 33px 32px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1280px) {
    margin: 20px 20px 20px auto;
    padding-left: 20px;
    width: 442px;
  }

  @media screen and (max-width: 960px) {
    margin: 20px;
    padding: 0;
    align-self: center;
    width: 565px;
  }

  @media screen and (max-width: 730px) {
    width: 276px;
    height: 237px;
    margin: 20px 12px;
  }
`;

export const ProjectTitle = styled.h2`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
  width: 565px;
  margin: 0 33px 20px auto;
  overflow: visible;

  @media screen and (max-width: 1280px) {
    width: 442px;
    font-size: 48px;
    line-height: 56px;
  }

  @media screen and (max-width: 960px) {
    margin: 0 0 20px 0;
  }

  @media screen and (max-width: 730px) {
    width: 276px;
    height: 37px;
    margin-bottom: 12px;
    font-size: 32px;
    line-height: 37px;
  }
`;

export const ProjectIntro = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #616161;
  margin: 0 auto 160px auto;
  overflow: visible;

  @media screen and (max-width: 1280px) {
    font-size: 20px;
    line-height: 30px;
    margin: 0 auto 140px auto;
  }

  @media screen and (max-width: 730px) {
    width: 276px;
    height: 60px;
    font-size: 16px;
    line-height: 20px;
    margin: 0 0 112px 0;
  }
`;

export const ProjectDate = styled.p`
  font-family: "SuisseInti-Book";
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #616161;
  margin: 0;

  @media screen and (max-width: 730px) {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const ProjectLink = styled.a`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #ff9900;
  position: absolute;
  bottom: 0;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

// CLIENT AND STUDENTS CARDS

export const BottomCards = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ClientCard = styled(GlobalCard).attrs({ className: "clientCard" })`
  background-color: #ffffff;
  width: 630px;
  height: 378px;
  margin-right: 20px;
  box-sizing: border-box;

  @media screen and (max-width: 1280px) {
    width: 462px;
    height: 442px;
  }

  @media screen and (max-width: 960px) {
    width: 630px;
    margin: 20px auto;
  }

  @media screen and (max-width: 730px) {
    width: 300px;
    height: 383px;
    font-size: 32px;
    line-height: 37px;
  }
`;

export const ClientWrapper = styled.div`
  width: 565px;
  margin: 32px 33px 32px 33px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1280px) {
    margin: 20px;
    padding-left: 20px;
    width: 442px;
  }
  @media screen and (max-width: 960px) {
    padding-left: 0;
    width: 565px;
    margin: 32px 33px 32px auto;
  }

  @media screen and (max-width: 730px) {
    margin: 12px;
    font-size: 24px;
    line-height: 28px;
    width: 276px;
    margin: 20px 12px;
    height: 343px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  height: 60px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const ClientPicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60px;
  height: 60px;
`;

export const ClientPic = styled.img``;

export const ClientInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: flex-start;
  margin: 0 0 0 24px;

  @media screen and (max-width: 730px) {
    margin: 0 0 0 12px;
  }
`;

export const ClientName = styled.h2`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
  margin: 0;
  overflow: hidden;

  @media screen and (max-width: 730px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const ClientPos = styled.h3`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #616161;
  margin: 8px 0 0 0;
  overflow: hidden;
`;

export const ClientRev = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #616161;
  overflow: hidden;
  margin: 0;

  @media screen and (max-width: 1280px) {
  }

  @media screen and (max-width: 730px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const ReviewLink = styled.a`
  width: auto;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #ff9900;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 1280px) {
    left: 20px;
  }

  @media screen and (max-width: 960px) {
    left: 0;
  }
`;

// STUDENT

export const StudentsCard = styled(GlobalCard).attrs({
  className: "studentsCard",
})`
  background-color: #ffffff;
  width: 630px;
  height: 378px;

  @media screen and (max-width: 1280px) {
    width: 462px;
    height: 442px;
  }

  @media screen and (max-width: 960px) {
    width: 630px;
    margin: 0 auto;
  }

  @media screen and (max-width: 730px) {
    width: 300px;
    height: 383px;
    font-size: 32px;
    line-height: 37px;
    margin: 0 auto;
  }
`;

export const StudentsWrapper = styled.div`
  width: 565px;
  margin: 32px 33px;
  position: relative;

  @media screen and (max-width: 1280px) {
    margin: 20px;
    width: 442px;
  }

  @media screen and (max-width: 960px) {
    width: 565px;
    margin: 32px 33px;
  }

  @media screen and (max-width: 730px) {
    width: 100%;
  }
`;

export const HeaderStudentWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
  height: 60px;

  @media screen and (max-width: 1280px) {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 730px) {
    flex-direction: column;
    height: 90px;
  }
`;

export const StudentsPicsWrapper = styled.div`
  height: 60px;
  width: 180px;
  position: relative;
  margin-right: 20px;

  @media screen and (max-width: 730px) {
    margin-bottom: 16px;
    height: 30px;
    width: 90px;
  }
`;

export const StudentsPics = styled.img`
  height: 60px;
  width: 60px;
  position: relative;

  &:nth-child(1) {
    transform: translateX(0);
    z-index: 200;
  }
  &:nth-child(2) {
    transform: translateX(-20px);
    z-index: 1;
  }
  &:nth-child(3) {
    position: absolute;
    transform: translateX(-40px);
  }

  @media screen and (max-width: 730px) {
    height: 30px;
    width: 30px;
    &:nth-child(1) {
      transform: translateX(0);
      z-index: 200;
    }
    &:nth-child(2) {
      transform: translateX(-10px);
      z-index: 100;
    }
    &:nth-child(3) {
      transform: translateX(-20px);
      z-index: 0;
    }
  }
`;

export const StudentsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-content: flex-start;
  margin: auto 0 0 0;
  @media screen and (max-width: 730px) {
    margin: 0;
  }
`;

export const StudentsTitle = styled.h2`
  margin: 0;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
  align-self: center;
  overflow: hidden;

  @media screen and (max-width: 730px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const StudentsNames = styled.p`
  margin: 0;
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #616161;
  overflow: hidden;
`;
export const StudentsRev = styled.p`
  font-family: "SuisseInti-Book";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  color: #616161;
  margin: 0;

  @media screen and (max-width: 730px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

// BOTTOM BUTTONS

export const ProjectsBottomLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    position: relative;
    width: 100%;
    
    @media screen and (max-width: 730px) {
        flex-direction: column;
        margin: 10px auto;
    }
`;

export const ProjectButtonBottom = styled(GlobalButton).attrs({ className: "projectButtonBottom" })`
    width: 293px;

    @media screen and (max-width: 730px) {
        margin: 10px auto;
    }
    @media screen and (max-width: 400px) {
        margin: 10px auto;
        
        
    }
`;



// KEYFRAMES

const placeholderShimmer = keyframes`
    0% {
    background-position: -468px 0;
    }
    100% {
    background-position: 468px 0; 
    }
`;

export const LinesWrapper = styled.div.attrs({
  className: "placeHolderWrapper",
})`
  width: 500px;
  height: 200px;
  display: flex;
  position: absolute;
  bottom: 100;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  align-self: center;

  @media screen and (max-width: 730px) {
    width: 200px;
  }
`;

export const Lines = styled.line.attrs({ className: "placeHolderLines" })`
  height: 20px;
  margin-top: 10px;
  width: 400px;
  align-self: center;
  ${(props) =>
    props.shine &&
    css`
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      background-repeat: no-repeat;
      background-size: 800px 104px;
      display: inline-block;
      position: relative;
      -webkit-animation-duration: 1s;
      -webkit-animation-fill-mode: forwards;
      -webkit-animation-iteration-count: infinite;
      -webkit-animation-name: ${placeholderShimmer};
      -webkit-animation-timing-function: linear;
    `}

  @media screen and (max-width: 730px) {
    width: 200px;
  }
`;

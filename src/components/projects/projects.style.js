import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';
import { GlobalButton } from '../global-components/global-components';



export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const ProjectsIntroWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto 60px auto;
    width: 100%;   
`;

export const TextWrapper = styled.div`
    max-width: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const ProjectIntroTitle = styled.h2`
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    margin: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 40px;
    }
`;

export const ProjectIntroText = styled.p`
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
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
`;

export const ImageProjectIntro = styled.img`
    max-width: 520px;
`;

export const ProjectsLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 0 80px 0;
    position: relative;
    width: 1280px;
    align-self: center;

`;

export const ProjectButton = styled(GlobalButton)`
    width: 400px;
    &:nth-child(2) {
        margin: 0 40px;
    }
`;

export const ProjectCardWrapper = styled.div.attrs({ className: "projectWrapper" })`
    margin: 0 0 80px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const ProjectCard = styled(GlobalCard).attrs({ className: "projectCard" })`
    display: flex;
    justify-content: space-between;
    align-self: center;
    background-color: #FFFFFF;
    width: 1280px;
    height: 378px;
    position: relative;
    margin: 0 0 20px 0;
`;

export const CoverCard = styled(GlobalCard).attrs({ className: "coverCard" })`
    width: 630px;
    height: 378px;
    z-index: 1000;
    position: relative;
    background-color: yellow;
`;

export const BottomCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    align-self: center;
    background-color: transparent;
`; 

export const ClientCard = styled(GlobalCard).attrs({className: "clientCard"})`
    background-color: #FFFFFF;
    width: 630px;
    height: 378px;
`;

export const StudentsCard = styled(GlobalCard).attrs({className: "studentsCard"})`
    background-color: #FFFFFF;
    width: 630px;
    height: 378px;
`;

export const ProjectsBottomLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto 80px auto;
    position: relative;
    width: 100%;
    
`;

export const ProjectButtonBottom = styled(GlobalButton).attrs({className: "projectButtonBottom"})`
    width: 293px;
`;


// TEST


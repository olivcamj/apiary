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
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 0 auto 60px auto;    

    @media screen and (max-width: 960px) {
        flex-direction: column-reverse;
    }

    @media screen and (max-width: 400px) {
        width: 320px;
        margin: 0 auto 40px auto; 
    }
`;

export const TextWrapper = styled.div`
    max-width: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    @media screen and (max-width: 1280px) {
        width: 453px;
    }
    @media screen and (max-width: 960px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 400px) {
        width: 280px;
    }
`;

export const ProjectIntroTitle = styled.h2`
    width: 100%;    
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
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
    @media screen and (max-width: 960px) {
        margin: 0 auto;
    }

    @media screen and (max-width: 320px) {
        width: 320px;
    }
`;

export const ImageProjectIntro = styled.img`
max-width: 520px;
    display: flex;
    justify-content: flex-end;
    @media screen and (max-width: 1280px) {
        width: 452px;
        height: 452px;
    }

    @media screen and (max-width: 400px) {
        width: 320px;
        height: 320px;
    }
    
`;


export const ProjectsLinkWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 0 80px 0;
    position: relative;
    max-width: 1280px;
    align-self: center;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        margin: 0 0 40px 0;
    }
`;

export const ProjectButton = styled(GlobalButton)`
    align-self: center;
    width: 400px;
    &:nth-child(2) {
        margin: 0 40px;
    }

    @media screen and (max-width: 1280px) {
        width: 288px;
    }

    @media screen and (max-width: 960px) {
        width: 400px;
        margin: 20px 0;
        &:nth-child(2) {
        margin: 0;
    }
    }

    @media screen and (max-width: 400px) {
        max-width: 288px;
    }
    
`;

// PROJECT CARDS

export const ProjectCardWrapper = styled.div.attrs({ className: "projectWrapper" })`
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

    @media screen and (max-width: 400px) {
        margin: 0 auto 60px auto;
    }
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

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 498px;
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
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 250px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const BottomCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    align-self: center;
    background-color: transparent;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`;

export const ClientCard = styled(GlobalCard).attrs({ className: "clientCard" })`
    background-color: #FFFFFF;
    width: 630px;
    height: 378px;
    
    @media screen and (max-width: 1280px) {
        width: 462px;
        height: 442px;
    }

    @media screen and (max-width: 960px) {
        width: 630px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        font-size: 32px;
        line-height: 37px;
        height: 383px;
        margin: 0 auto;
    }

    
`;

export const StudentsCard = styled(GlobalCard).attrs({ className: "studentsCard" })`
    background-color: #FFFFFF;
    width: 630px;
    height: 378px;

    @media screen and (max-width: 1280px) {
        width: 462px;
        height: 442px;
    }

    @media screen and (max-width: 960px) {
        width: 630px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 383px;
        font-size: 32px;
        line-height: 37px;
        margin: 0 auto;
    }
`;

export const ProjectsBottomLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto 80px auto;
    position: relative;
    width: 100%;
    
    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const ProjectButtonBottom = styled(GlobalButton).attrs({ className: "projectButtonBottom" })`
    width: 293px;

    @media screen and (max-width: 400px) {
        margin: 10px auto;
        
        
    }
`;


// TEST


import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';
import { GlobalButton } from '../global-components/global-components';

export const Container = styled.div`
    background-color: #E5E5E5;
    padding: 100px 0 150px 0;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

export const ProjectsLinkWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto 80px auto;
    position: relative;
    width: 1360px;

`;

export const ProjectButton = styled(GlobalButton)`
    &:nth-child(2) {
        margin: 0 40px;
    }
`;

export const ProjectCardWrapper = styled.div`
    margin: 0 0 80px 0;
    width: 100%;
    height: 100%;
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
    position: relative;
    margin: 0 0 20px 0;
`;

export const CoverCard = styled(GlobalCard).attrs({ className: "coverCard" })`
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
`;

export const StudentsCard = styled(GlobalCard).attrs({className: "studentsCard"})`
    background-color: #FFFFFF;
`;

export const ProjectsBottomLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto 80px auto;
    position: relative;
    width: 100%;
    
`;


// TEST


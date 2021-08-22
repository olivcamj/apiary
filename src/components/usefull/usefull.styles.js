import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';


export const Container = styled.div`
    background: #1A1B22;    
    max-width: 1440px;
    padding: 100px 0 150px 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;

`;


export const UsefullTitle = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    margin: 0 auto;
    overflow-y: hidden;
`;

export const UsefullIntro = styled.p`
    width: 840px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #DDDDDD;
    margin: 40px auto 80px auto;
`;


export const CardWrapper = styled.div.attrs({ className: "cards" })`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;

    @media screen and (max-width: 1360px) {
        
    }
`;

export const UsefullCard = styled(GlobalCard).attrs({ className: "usefullCard" })`
    border: none;
    border-radius: 0;
    max-width: 400px;
    height: 100%;
    background: transparent;

    &:nth-child(2) {
        margin: 0 40px;
    }

    @media screen and (max-width: 1360px) {
        &:nth-child(1) {
            
        }
        &:nth-child(2) {
        }
        &:nth-child(3) {
        }
    }
`;



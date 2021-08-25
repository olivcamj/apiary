import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';


export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0 0 20px 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 600px) {
        padding: 0;
    }
`;


export const IconBoxTitle = styled.h2`
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    margin: 0 auto;
    text-align: center;
    margin: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 40px;
        text-align: left;
    }

    @media screen and (max-width: 400px) {
        width: 288px; 
        font-size: 32px;
        line-height: 37px;
    }

    
`;

export const IconBoxIntro = styled.p`
    max-width: 840px;
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #DDDDDD;
    margin: 40px auto 80px auto;

    @media screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 30px;
        text-align: left;
    }
`;


export const CardWrapper = styled.div.attrs({ className: "cards" })`
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    row-gap: 77px;
    justify-content: center;
    align-content: center;
    margin: 0;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const IconBoxCard = styled(GlobalCard).attrs({ className: "iconBoxCard" })`
    border: none;
    border-radius: 0;
    max-width: 400px;
    height: 100%;
    background: transparent;

    &:nth-child(2) {
        margin: 0 40px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
        margin: 0 auto;
        &:nth-child(2) {
        margin-left: auto;
        margin-right: auto;
        margin-top: 32px;
        margin-bottom: 32px;
        } 
    }
`;



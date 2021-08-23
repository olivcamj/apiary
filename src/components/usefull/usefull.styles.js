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


export const UsefullTitle = styled.h2`
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #FFFFFF;
    text-align: center;
    margin: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 40px;
    }
`;

export const UsefullIntro = styled.p`
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
    }
`;


export const CardWrapper = styled.div.attrs({className: "cards"})`
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    row-gap: 77px;
    justify-content: center;
    align-content: center;
    margin: 0;
`;

export const UsefullCard = styled(GlobalCard).attrs({className: "usefullCard"})`
    border: none;
    border-radius: 0;
    width: 400px;
    height: 100%;
    background: transparent;

    &:nth-child(2) {
        margin: 0 40px;
    }
`;



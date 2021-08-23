import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';

export const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    padding: 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
`;


export const RequestsTitle = styled.h2`
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    text-align: center;
    margin: 0;
    width: 100%;

    @media screen and (max-width: 600px) {
        font-size: 34px;
        line-height: 40px;
    }
`;

export const RequestsIntro = styled.p`
    max-width: 751px;
    font-family: 'SuisseInti-Book', 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #616161;
    text-align: center;
    margin: 40px auto 70px auto;

    @media screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 30px;
    }
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-wrap: wrap;
    row-gap: 40px;
    justify-content: center;
    align-content: center;
`;

export const RequestsCard = styled(GlobalCard).attrs({className: "RequestsCard"})`
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 400px;
    height: 400px;
    background: transparent;

    &:nth-child(2) {
        margin-left: 40px;
        margin-right: 40px;
    }
    
`;



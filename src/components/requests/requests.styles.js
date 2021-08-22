import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';

export const Container = styled.div`
    background: #fff;    
    max-width: 1440px;
    padding: 100px 0 150px 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;

    @media screen and (max-width: 400px) {
        
    }
`;


export const RequestsTitle = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    /* identical to box height */
    color: #000000;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: 400px) {
        width: 288px; 
        font-size: 32px;
        line-height: 37px;
    }
`;

export const RequestsIntro = styled.p`
    width: 751px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #616161;
    text-align: center;
    margin: 40px auto 70px auto;

    @media screen and (max-width: 400px) {
        width: 288px; 
        font-size: 20px;
        line-height: 30px;
        margin: 32px auto 32px auto;
    }
`;

export const CardWrapper = styled.div`
    overflow: visible;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const RequestsCard = styled(GlobalCard).attrs({className: "RequestsCard"})`
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    width: 400px;
    height: 400px;
    background: transparent;

    &:nth-child(2) {
        margin-left: 40px;
        margin-right: 40px;
    }

    @media screen and (max-width: 400px) {
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
    
`;



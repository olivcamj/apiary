import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';

export const Container = styled.div`
    background: #fff;    
    width: 1440px;
    padding: 100px 0 150px 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;
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
`;

export const CardWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
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
    
`;



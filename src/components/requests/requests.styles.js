import styled from "styled-components";
import { GlobalCard } from '../global-components/global-card/globalCard';

import { Link } from 'react-router-dom';

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
        text-align: left;
    }

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
    width: 100%;
    height: 100%;
    row-gap: 40px;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 400px) {
        flex-direction: column;
        row-gap: 32px;
    }
`;

export const LinkToProject = styled(Link).attrs({className: "links"})`
    width: auto;
    text-decoration: none;
    &:nth-child(2) {
        margin-left: 40px;
        margin-right: 40px;
    }
`;

export const RequestsCard = styled(GlobalCard).attrs({className: "RequestsCard"})`
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    max-width: 400px;
    height: 400px;
    background: transparent;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.2);
    }

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



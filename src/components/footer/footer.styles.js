import styled from 'styled-components';
import { Wrapper } from '../Wrapper.js';


export const WrapperDiv = styled(Wrapper)`
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    height: 280px;
    position: relative;
    box-sizing: border-box;
    padding: 80px 80px 60px 80px;
    max-width: 1440px;

    @media screen and (max-width: 960px) {
        padding: 80px 40px 60px 40px;
        flex-direction: column;
        height: 100%;
    }

    @media screen and (max-width: 830px) {
        max-width: 830px;
        padding: 40px 16px 40px 16px;
    }

    @media screen and (max-width: 320px) {
        max-width: 320px;
        align-self: center;
    }
`;

export const LeftDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #DDDDDD;


    @media screen and (max-width: 1280px) {
        font-size: 18px;
        line-height: 30px;
    }

    @media screen and (max-width: 960px) {
        flex-direction: row;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 830px) {
        flex-direction: column;
        
    }

`;

export const AboutUs = styled.p`
    margin: 0 0 20px 0;
    @media screen and (max-width: 960px) {
        margin: 0 20px 0 0;
        width: 120px;
    }

    @media screen and (max-width: 830px) {
        margin-bottom: 60px;
        
    }
`;
export const Email = styled.p`
    margin: 0;
    @media screen and (max-width: 960px) {
        margin: 0 20px 0 0;
    }

    @media screen and (max-width: 830px) {
        width: auto;
        margin: 0 auto 10px auto;
    }
`;
export const Linkedin = styled.p`
    margin: 0;
    @media screen and (max-width: 960px) {
        margin: 0 20px 0 0;
    }

    @media screen and (max-width: 830px) {
        width: auto;
        margin: 0 auto 10px auto;
    }
`;
export const Tfn = styled.p`
    margin: 0;
    @media screen and (max-width: 960px) {
        margin: 0 20px 0 0;
    }

    @media screen and (max-width: 830px) {
        width: auto;
        margin: 0 auto 10px auto;
    }
`;

export const CenterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;

    @media screen and (max-width: 960px) {
        margin-bottom: 40px;
        
    }
`;

export const FooterInfo = styled.div`
    width: 348px;
    height: 92px;
    background: #FFFFFF;
    border-radius: 14px;
    align-self: center;

    @media screen and (max-width: 320px) {
        width: 300px;
    }
`;

export const Info = styled.p`
    width: 284px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
    margin: 16px 32px;

    @media screen and (max-width: 320px) {
        width: 268px;
        font-size: 18px;
        margin: 16px;
    }
`;

export const RightDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #DDDDDD;
    
    @media screen and (max-width: 1280px) {
        font-size: 18px;
        line-height: 30px;
    }

    @media screen and (max-width: 830px) {
        position: static;
        width: auto;
        margin: 0 auto;
    }
`;

export const Top = styled.p`
    margin: 0;
    text-align: right;

    @media screen and (max-width: 960px) {
        
    }

    @media screen and (max-width: 830px) {
        position: absolute;
        right: 16px;
        top: 40px;
    }
`;

export const Text = styled.p`
    margin: 0;
    width: 100%;
    text-align: right;
    align-self: flex-end;
    position: absolute;
    bottom: 0;

    @media screen and (max-width: 960px) {
        left: 0;
        width: auto;
        
    }

    @media screen and (max-width: 830px) {
        position: relative;
        width: auto;
        margin: 20px auto 0 auto;
    }
`;


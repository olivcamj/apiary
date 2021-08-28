import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    position: relative;
    max-width: 1440px;
    margin: 0;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        height: 100%;
    }

    @media screen and (max-width: 830px) {
        max-width: 830px;
    }

    @media screen and (max-width: 320px) {
        max-width: 320px;
        align-self: center;
    }
`;

export const LeftDiv = styled.div`
    position: relative;
    margin: 0;
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
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        margin-bottom: 40px;
    }

    @media screen and (max-width: 830px) {
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 320px) {

        margin-bottom: 60px;
        
    }
`;

export const AboutUs = styled.p`
    margin: 0 0 20px 0;
    @media screen and (max-width: 960px) {
        margin: 0 20px 0 0;
        width: 120px;
    }

    @media screen and (max-width: 960px) {
        margin: 0;
    }

    @media screen and (max-width: 830px) {
        margin-bottom: 60px;
        
    }
`;
export const Email = styled.p`
    margin: 0;
    @media screen and (max-width: 960px) {
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
    position: relative;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px) {
        margin-bottom: 40px;
        
    }
`;

export const FooterInfo = styled.div`
    width: 348px;
    height: 92px;
    background: #FFFFFF;
    border-radius: 14px;
    @media screen and (max-width: 380px) {
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

    @media screen and (max-width: 380px) {
        width: 268px;
        font-size: 18px;
        margin: 16px;
    }
`;

export const RightDiv = styled.div`
    position: relative;
    height: auto;
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
    display: inline-block;
    

    @media screen and (max-width: 830px) {
        width: auto;
        position: absolute;
        right: 0;
        top: 0;
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


import styled from "styled-components";


export const Card = styled.div`
    position: relative;
    justify-content: center;
    align-content: center;
    display: flex;
    border-radius: 14px;
    margin: 0;
`;
// PROJECT COVER CARD

// PROJECT INFO







// PROJECT CLIENT REVIEW


// STUDENTS SECTION






// ICONBOX SECTION

export const IconBoxWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
    width: 400px;
    height: 202px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0 auto;

    @media screen and (max-width: 400px) {
        width: 300px;
        height: 156px;
    }
`;

export const IconBoxImage = styled.img`

`;

export const IconBoxTitle = styled.h2`
    width: 400px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #FF9900;
    overflow: hidden;

    @media screen and (max-width: 400px) {
        width: 288px;
        font-size: 32px;
        line-height: 37px;
        margin: 0 auto;
    }
`;

export const IconBoxText = styled.p`
    width: 400px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #DDDDDD;

    @media screen and (max-width: 400px) {
        width: 288px;
        font-size: 20px;
        line-height: 30px;
        margin: 24px auto 0 auto;
    }
`;

// REQUESTS SECTION

export const RequestsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
`;

export const RequestsHash = styled.p`
    overflow: hidden;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FF9900;
    margin: 30px 0 10px 0;

    @media screen and (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
    }
`;

export const RequestsTitle = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 40px;
    text-align: center;
    color: #000000;
    margin: 0 0 20px 0;

    @media screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 30px;
    }
`;

export const RequestsImageWrapper = styled.div`
    width: 400px;
    height: 281px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
    @media screen and (max-width: 400px) {
        width: 300px;
        height: 156px;
    }
`;

export const RequestsImage = styled.img`

`;

// CHAT CARDS

export const ChatText = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */
    margin: 30px;

    @media screen and (max-width: 420px) {
        font-size: 16px;
        line-height: 20px;
    }

    @media screen and (max-width: 420px) {
        margin: 14px;
    }
`;
import styled from "styled-components";


export const Card = styled.div`
    position: relative;
    justify-content: center;
    align-content: center;
    display: flex;
    background-color: green;
    border-radius: 14px;
    margin: 0;
`;
// PROJECT COVER CARD
export const ProjectCover = styled.img`
    object-fit: cover;
    object-position: center;
    border-radius: 14px;
`;
// PROJECT INFO

export const ProjectWrapper = styled.div`
    width: 565px;
    margin: 32px 33px 32px auto;
    position: relative;
    overflow: hidden;
`;

export const ProjectTitle = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    display: line-block;
    width: 565px;
    height: 56px;
    margin: 0 33px 20px auto;
    overflow: hidden;
`;

export const ProjectIntro = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #616161;
    margin: 0 auto 160px auto;
    overflow: hidden;
`;

export const ProjectDate = styled.p`
    font-family: 'SuisseInti-Book';
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #616161;
    margin: 0;
`;

export const ProjectLink = styled.a`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    /* identical to box height, or 143% */
    text-align: right;
    color: #FF9900;
    position: absolute;
    bottom: 0;
    right: 0;
    &:hover {
        cursor: pointer;
    }
`;

// PROJECT CLIENT REVIEW
export const ClientWrapper = styled.div`
    width: 565px;
    margin: 32px 33px 32px auto;
    position: relative;
`;

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 32px;

`;

export const ClientPicWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60px;
    height: 60px;
`;

export const ClientPic = styled.img``;

export const ClientInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    margin: 0 0 0 24px;
`;

export const ClientName = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
    margin: 0;
    overflow: hidden;
`;

export const ClientPos = styled.h3`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */
    color: #616161;
    margin: 8px 0 0 0 ;
`;

export const ClientRev = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    /* or 150% */
    color: #616161;
`;

// STUDENTS SECTION

export const StudentsWrapper = styled.div`
    width: 565px;
    margin: 32px 33px;
    position: relative;
`;
export const StudentsPicsWrapper = styled.div`
    height: 60px;
    width: 180px;
    position: relative;
    overflow: hidden;    
`;
export const StudentsPics = styled.img`
    transform: translateX(105px);
    &:nth-child(2) {
        transform: translateX(0)
    }
    &:nth-child(3) {
        transform: translateX(-105px)
    }
`;

export const StudentsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-content: flex-start;
    margin: auto 0 0 0;
`;
export const StudentsTitle = styled.h2`
    margin: 0;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
    align-self: center;
    overflow: hidden;
`;
export const StudentsNames = styled.p`
    margin: 0;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #616161;
    overflow: hidden;
`;
export const StudentsRev = styled.div`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #616161;
`;

export const ReviewLink = styled.a`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #FF9900;
    position: absolute;
    bottom: 0;
    left: 0;
`;


// USEFULL SECTION

export const UsefullWrapper = styled.div`
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
`;

export const UsefullImage = styled.img`

`;

export const UsefullTitle = styled.h2`
    width: 400px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #FF9900;
    overflow: hidden;
`;

export const UsefullText = styled.p`
    width: 400px;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;

    text-align: center;

    color: #DDDDDD;
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
`; 

export const RequestsImageWrapper = styled.div`
    width: 400px;
    height: 281px;
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0 auto;
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
`;
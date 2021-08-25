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
export const ProjectCover = styled.img`
    object-fit: fill;
    object-position: center center;
    border-radius: 14px;

    @media screen and (max-width: 960px) {
        
    }

    @media screen and (max-width: 400px) {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        height: 250px;
    }
`;
// PROJECT INFO

export const ProjectWrapper = styled.div`
    width: 565px;
    margin: 32px 33px 32px auto;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 1280px) {
        margin: 20px 20px 20px auto;
        padding-left: 20px;
        width: 442px;
    }

    @media screen and (max-width: 960px) {
        padding-left: 0;
        margin: 20px;
        align-self: center;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 276px;
        height: 237px;
        margin: 20px 12px;
    }
`;

export const ProjectTitle = styled.h2`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    width: 565px;
    margin: 0 33px 20px auto;
    overflow: visible;

    @media screen and (max-width: 1280px) {
        width: 442px;
        font-size: 48px;
        line-height: 56px;
    }

    @media screen and (max-width: 400px) {
        width: 276px;
        height: 37px;
        margin-bottom: 12px;
        font-size: 32px;
        line-height: 37px;
        
    }
`;

export const ProjectIntro = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #616161;
    margin: 0 auto 160px auto;
    overflow: visible;

    @media screen and (max-width: 1280px) {
        font-size: 20px;
        line-height: 30px;
        margin: 0 auto 140px auto;
    }

    @media screen and (max-width: 400px) {
        width: 276px;
        height: 60px;
        font-size: 16px;
        line-height: 20px;
        margin: 0 0 112px 0;
        
    }
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

    @media screen and (max-width: 400px) {
        position: absolute;
        bottom: 0;
        left: 0;
        
    }
`;

export const ProjectLink = styled.a`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
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
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;

    @media screen and (max-width: 1280px) {
        margin: 20px 20px 20px auto;
        padding-left: 20px;
        width: 442px;
    }
    @media screen and (max-width: 960px) {
        padding-left: 0;
        margin: 20px auto;
        align-self: center;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        margin: 12px;
        font-size: 24px;
        line-height: 28px;
        width: 276px;
        margin: 20px 12px;
        height: 343px;
        
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    margin-bottom: 32px;
    height: 60px;

    @media screen and (max-width: 1280px) {
        margin-bottom: 20px;
    }

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

    @media screen and (max-width: 400px) {
        margin: 0 0 0 12px;
        
    }
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

    @media screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 28px;
        
    }
    
`;

export const ClientPos = styled.h3`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #616161;
    margin: 8px 0 0 0 ;
    overflow: hidden;
`;

export const ClientRev = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #616161;
    overflow: hidden;
    margin: 0;

    @media screen and (max-width: 1280px) {
        
    }

    @media screen and (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
        
    }


`;

export const ReviewLink = styled.a`
    width: auto;
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

    @media screen and (max-width: 1280px) {
        left: 20px;
    }
`;

// STUDENTS SECTION

export const StudentsWrapper = styled.div`
    width: 565px;
    margin: 32px 33px;
    position: relative;

    @media screen and (max-width: 1280px) {
        margin: 20px;
        width: 442px;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`;

export const HeaderStudentWrapper = styled.div`
    display: flex;
    margin-bottom: 32px;
    height: 60px;

    @media screen and (max-width: 1280px) {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 400px) {
        flex-direction: column;
        height: 90px;

    }

`;

export const StudentsPicsWrapper = styled.div`
    height: 60px;
    width: 180px;
    position: relative;
    margin-right: 20px;

    @media screen and (max-width: 400px) {
        margin-bottom: 16px;
        height: 30px;
        width: 90px;
    } 
`;

export const StudentsPics = styled.img`
    height: 60px;
    width: 60px;
    position: relative;
    
    &:nth-child(1) {
        transform: translateX(0);
        z-index: 200;
    }
    &:nth-child(2) {
        transform: translateX(-20px);
        z-index: 1;
    } 
    &:nth-child(3) {
        position: absolute;
        transform: translateX(-40px)
    } 

    @media screen and (max-width: 400px) {
        height: 30px;
        width: 30px; 
        &:nth-child(1) {
            transform: translateX(0);
            z-index: 200;
        }
        &:nth-child(2) {
            transform: translateX(-10px);
            z-index: 100;
        }
        &:nth-child(3) {
            transform: translateX(-20px);
            z-index: 0;
        }
} 

`;

export const StudentsInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-content: flex-start;
    margin: auto 0 0 0;
    @media screen and (max-width: 400px) {
        margin: 0;
    } 
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

    @media screen and (max-width: 400px) {
        font-size: 24px;
        line-height: 28px;
        @media screen and (max-width: 400px) {
        align-self: flex-start;
    } 
    } 
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
export const StudentsRev = styled.p`
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    color: #616161;
    margin: 0;

    @media screen and (max-width: 400px) {
        font-size: 16px;
        line-height: 20px;
    } 
`;




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
import styled from 'styled-components';

export const Hover = styled.div`
    width: 329px;
    background: #FF9900;
    border-radius: 14px 14px 14px 0px;
    position: absolute;
    right: 250px;
    top: -30px;

    @media screen and (max-width: 940px){
        top: 30px;
        right: 0;
    }
    @media screen and (max-width: 830px){
        top: 250px;
        right: 0;
    }

    @media screen and (max-width: 400px){
        width: 288px;
    }
`;



export const Blockquote = styled.blockquote`
    padding: 15px 25px;
`;

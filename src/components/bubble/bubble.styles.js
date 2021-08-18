import styled from 'styled-components';
import { GlobalCard } from '../global-components/global-card/globalCard';
import { GlobalButton } from '../global-components/global-components';

export const Container = styled.div`
    background: #E5E5E5;    
    width: 1440px;
    padding: 100px 0 100px 0;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-content: center;
    box-sizing: border-box;

`;

export const BubbleTitle = styled.h2`
    margin: 0 auto 80px auto;
    font-family: 'SuisseInti-Book';
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 56px;
    color: #000000;
    overflow: hidden;
`;

export const ChatWrapper = styled.div`
    width: 100%;
    margin: 0;
    padding: 0 80px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

`;

export const LeftTextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    overflow: visible;
    align-self: flex-start;
    margin-bottom: 40px;

`;

export const IconWrapper = styled.div`
    width: 48px;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: visible;
`;

export const IconImage = styled.img`
    position: absolute;
    bottom: -25px;
`;

export const OrangeCard = styled(GlobalCard).attrs({className: 'OrangeCard'})`
    margin-left: 40px;
    border-bottom-left-radius: 0;
    background-color: #FF9900;
    width: 840px;

`;  

export const RightTextWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    overflow: visible;
    align-self: flex-end;
    margin-bottom: 40px;
`;

export const WhiteCard = styled(GlobalCard).attrs({className: 'WhiteCard'})`
    border-bottom-right-radius: 0;
    background-color: #fff;
    color: #000;
`;

export const DelegateTaskButtonWrapper = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const DelegateButton = styled(GlobalButton)`
    width: 293px;
`;
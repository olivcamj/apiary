import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './Wrapper';
import HeaderImg from '../images/header.png';

const HeaderContainer = styled.div`
  max-width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 620px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 56px;
`;

const TitleContrast = styled.span`
  color: #FF9900;
`;

const Image = styled.img`
  max-height: 530px;
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <TextContainer>
          <Title>Your task. Done by data and web development students. <TitleContrast>For free!</TitleContrast></Title>
        </TextContainer>
        <Image src={HeaderImg}></Image>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header;

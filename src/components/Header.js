import styled from 'styled-components';
import { Wrapper } from './Wrapper';
import HeaderImg from '../images/header.png';

const HeaderContainer = styled.div`
  position: relative;
  height: 530px;
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;

  @media (min-width: 780px) and (max-width: 1320px) {
    align-items: flex-start;
  }

  @media screen and (max-width: 779px) {
    justify-content: center;
    height: auto;
  }
`;

const TextContainer = styled.div`
  width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 779px) {
    width: auto;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 56px;

  @media screen and (max-width: 779px) {
    max-width: 430px;
    font-size: 34px;
    line-height: 39px;
  }
`;

const TitleContrast = styled.span`
  color: #FF9900;
`;

const Image = styled.img`
  max-width: 542px;
  max-height: 530px;
  position: absolute;
  bottom: 0;
  right: 0;

  @media (min-width: 1124px) and (max-width: 1260px) {
    width: 440px;
  }

  @media (min-width: 780px) and (max-width: 1123px) {
    max-width: 366px;
    max-height: 358px;
  }

  @media screen and (max-width: 779px) {
    position: relative;
    max-width: 366px;
    margin-top: 30px;
  }
`;

const HeaderButton = styled.button`
  margin-top: 60px;
  width: fit-content;
  padding: 20px 60px;
  border-radius: 40px;
  border: none;
  background-color: #ff9900;
  color: white;
  font-size: 24px;
  line-height: 32px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  overflow: visible;
  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 779px) {
    margin-top: 30px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <TextContainer>
          <Title>Your task. Done by data and web development students. <TitleContrast>For free!</TitleContrast></Title>
          <Image src={HeaderImg}></Image>
          <HeaderButton orange>Delegate a task</HeaderButton>
        </TextContainer>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header;

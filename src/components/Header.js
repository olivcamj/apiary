import styled from 'styled-components';
import { Wrapper } from './Wrapper';
import HeaderImg from '../images/header.png';

const HeaderContainer = styled.div`
  width: 100%;
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
  overflow: visible;
  overflow-x: visible;
`

const Title = styled.h1`
  margin: 0;
  font-size: 48px;
  line-height: 56px;
  overflow: hidden;
`;

const TitleContrast = styled.span`
  color: #FF9900;
`;

const Image = styled.img`
  max-height: 530px;
  width: auto;
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
`;

const Header = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <TextContainer>
          <Title>Your task. Done by data and web development students. <TitleContrast>For free!</TitleContrast></Title>
          <HeaderButton orange>Delegate a task</HeaderButton>
        </TextContainer>
        <Image src={HeaderImg}></Image>
      </HeaderContainer>
    </Wrapper>
  )
}

export default Header;

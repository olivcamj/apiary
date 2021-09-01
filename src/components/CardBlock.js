import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  background-color: #fff;

  &.dark {
    background-color: #1a1b22;
    color: #fff;
  }

  &.neutral & {
    background-color: #e5e5e5;
    color: #000;
  }
`;

const Title = styled.h2`
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 48px;
  line-height: 56px;
  /* color: #FFFFFF; */
  margin: 0 auto;
  text-align: center;
  margin: 0;
  width: 100%;

  @media screen and (max-width: 600px) {
    font-size: 34px;
    line-height: 40px;
    text-align: left;
  }

  @media screen and (max-width: 400px) {
    width: 288px;
    font-size: 32px;
    line-height: 37px;
  }
`;

const Intro = styled.p`
  max-width: 840px;
  font-family: "SuisseInti-Book", "Helvetica", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  /* color: #DDDDDD; */
  margin: 40px auto 80px auto;

  @media screen and (max-width: 600px) {
    font-size: 20px;
    line-height: 30px;
    text-align: left;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  flex-wrap: wrap;
  row-gap: 77px;
  justify-content: center;
  align-content: center;
  margin: 0;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const CardBlock = ({ title, intro, cards, color }) => {
  return (
    <Container className={color}>
      <Title>{title}</Title>
      <Intro>{intro}</Intro>
      <CardWrapper>{cards}</CardWrapper>
    </Container>
  );
};

export default CardBlock;

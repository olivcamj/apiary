import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 100px 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${({ dark }) =>
    dark &&
    css`
      background-color: #1A1B22;
      color: #fff;
  `}
  ${({ neutral }) =>
    neutral &&
    css`
      background-color: #e5e5e5;
      color: #000;
  `}

  @media (min-width: 601px) and (max-width: 1024px) {
    padding: 100px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 60px 16px;
  }



`;

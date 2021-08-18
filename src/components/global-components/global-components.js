import styled from 'styled-components';

export const GlobalButton = styled.button`
  all: unset;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.3s;
  text-align: center;
  border: 2px solid #FF9900;
  border-radius: 40px;

  background: ${props => props.orange ? "#FF9900" : "#FFFFFF"};
  color: ${props => props.orange ? "#FFFFFF" : "#FF9900"};
  
  margin: ${props => props.marginb ? "0 20px" : "0"};

  height: ${props => props.header ? "60px" : "70px"};
  font-size: ${props => props.header ? "16px" : "24px"};
  line-height: ${props => props.header ? "20px" : "28px"}28px;

  font-family: Suisse Intl;
  font-style: normal;
  font-weight: 400;

`;


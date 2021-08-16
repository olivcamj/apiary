import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  background color: ${(props) => {
    if (props.neutral) return '#e5e5e5';
    else if (props.dark) return '#000';
    else return '#fff';
  }};
  color: ${(props) => { props.dark ? '#fff' : '#000' }};
  margin: 100px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
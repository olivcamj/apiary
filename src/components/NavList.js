/* eslint-disable no-unused-vars */
import { Link as LinkTo } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 488px;
  list-style: none;

  @media (max-width: 768px) {
    max-width: calc(100% - 50px);
    height: 416px;
    flex-direction: column;
  }

  @media (max-width: 325px) {
    margin: 0 auto;
    padding-top: 78.3px;
    max-width: 288px;
    height: 396px;
  }
`;

const ListItem = styled.li`
  margin-right: 32px;
  max-width: 95px;
  width: auto;
  height: 19px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #616161;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: #000;
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
  }

  .Styledlink-to {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: calc(100% - 50px);
    height: 39px;
    font-style: normal;
    font-weight: normal;
    font-size: 27px;
    line-height: 35px;
    text-align: center;
    color: #000;

    &:first-child {
      margin-top: 15px;
    }
  }

  @media (max-width: 325px) {
    max-width: 288px;
    height: 39px;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 39px;
    text-align: center;
    color: #000;

    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
`;

const StyledLink = styled(Link)`
  width: auto
`;

const NavList = ({ location }) => {
  return location.pathname === "/" ? (
    <List>
      <ListItem>
        <StyledLink to="requests" smooth={true}>
          We can help!
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="about" smooth={true}>
          About
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="timeline" smooth={true}>
          How to Start
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="projects" smooth={true}>
          Projects
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink to="contacts" smooth={true}>
          Contacts
        </StyledLink>
      </ListItem>
    </List>
  ) : (
    <List>
      <ListItem>
        <LinkTo to="/" className="link-to">
          Back to homepage
        </LinkTo>
      </ListItem>
      <ListItem>Students&apos; projects</ListItem>
    </List>
  );
};

export default NavList;

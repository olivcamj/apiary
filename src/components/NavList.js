/* eslint-disable no-unused-vars */
import { Link as LinkTo } from 'react-router-dom';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;

  @media (max-width: 325px) {
    margin: 0 auto;
    padding-top: 78.3px;
    max-width: 288px;
    height: 396px;
    flex-direction: column;
  }
`;

const ListItem = styled.li`
  margin-right: 32px;
  max-width: 95px;
  height: 19px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #616161;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    color: #000;
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0;
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

const NavList = ({ location }) => {
  return location.pathname === "/" ? (
    <List>
      <ListItem>
        <Link to="requests" smooth={true}>
          We can help!
        </Link>
      </ListItem>
      <ListItem>
        <Link to="about" smooth={true}>
          About
        </Link>
      </ListItem>
      <ListItem>
        <Link to="start" smooth={true}>
          How to Start
        </Link>
      </ListItem>
      <ListItem>
        <Link to="projects" smooth={true}>
          Projects
        </Link>
      </ListItem>
      <ListItem>
        <Link to="contacts" smooth={true}>
          Contacts
        </Link>
      </ListItem>
    </List>
  ) : (
    <List>
      <ListItem>
        <LinkTo to="/" className="link-to">Back to homepage</LinkTo>
      </ListItem>
      <ListItem>Students' projects</ListItem>
    </List>
  );
};

export default NavList;

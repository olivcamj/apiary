/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/practicum-logo.svg";
import mobileMenu from "../images/ChatIcon.png";
import NavList from "./NavList";
import { Wrapper } from "./Wrapper";

const NavbarWrapper = styled(Wrapper)`
  padding-top: 0;
  padding-bottom: 0;
`;

const Container = styled.nav`
  margin: 0 auto;
  padding-top: 27px;
  max-width: 1280px;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    padding-top: 42px;
    max-width: 944px;
    min-height: 25px;
    height: 100%;
  }

  @media (max-width: 980px) {
    padding-top: 25px;
    max-width: calc(100% - 40px);
    flex-direction: column;
  }

  @media (max-width: 325px) {
    max-width: 288px;
    min-height: 39px;
  }
`;

const StyledLink = styled(Link)`
  width: 180px;

  @media (max-width: 1100px) {
    width: 137px;
  }
`;

const Logo = styled.div`
  margin-top: 5px;
  width: 180px;
  height: 35px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 1100px) {
    width: 137px;
    height: 25px;
  }

  .logo-link {
    width: 180px;
  }
`;

const MobileNav = styled.button`
  position: absolute;
  top: 30px;
  right: 0;
  margin-top: 0;
  border: none;
  padding: 0;
  width: 32px;
  min-height: 25px;
  background: transparent;
`;

const MobileMenu = styled.div`
  display: flex;
  outline: none;
  width: 32px;
  height: 100%;
  border: 0px;
  padding: 0px;
  background: transparent;
  transition: all 250ms ease-out;
  cursor: pointer;

  &:before,
  :after {
    content: "";
    width: 32px;
    height: 2px;
    border-radius: 2px;
    position: absolute;
    background: #000;
    transition: all 250ms ease-out;
    will-change: transform;
  }

  &:before {
    transform: translateY(-3px);
  }

  &:after {
    transform: translateY(3px);
  }

  // line transition
  &.is-active:before {
    transform: translateY(0) rotate(45deg);
  }

  &.is-active:after {
    transform: translateY(0) rotate(-45deg);
  }
`;

const Button = styled.button`
  border: 2px solid #f90;
  border-radius: 30px;
  padding: 20px 32px;
  width: 184px;
  height: 60px;
  box-sizing: border-box;
  background: #fff;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #f90;
  transition: all 0.2s ease-in-out;

  :hover {
    background-color: #f90;
    color: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    border-radius: 40px;
    padding: 19px 58px;
    width: 288px;
    height: 70px;
    background-color: #f90;
    font-size: 24px;
    line-height: 32px;
    color: #fff;
    align-self: center;
  }

  @media (max-width: 325px) {
    margin-top: 70px;
  }
`;

const Navbar = () => {
  // Initialize state with width undefined, so server and client renders match
  const [windowSize, setWindowSize] = useState({ width: undefined });
  const [isOpen, setIsOpen] = useState(false);
  let location = useLocation();

  function handleWindowResize() {
    useEffect(() => {
      function handleWindowSizeChange() {
        setWindowSize({ width: window.innerWidth });
      }

      window.addEventListener("resize", handleWindowSizeChange);

      // Call handler right away so state gets updated with initial window size
      handleWindowSizeChange();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, []);

    return windowSize;
  }

  let size = handleWindowResize();
  let isMobile = size.width <= 980;

  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <NavbarWrapper id='navbar'>
      <Container role="navigation" aria-label="main navigation" id="navbar">
        <StyledLink to="/">
          <Logo role="button" aria-label="home" />
        </StyledLink>
        {isMobile && (
          <MobileNav>
            <MobileMenu
              onClick={openMenu}
              className={`${isOpen ? "is-active" : null}`}
              aria-expanded="false"
              role="button"
              aria-label="menu"
            />
          </MobileNav>
        )}
        {(!isMobile || isOpen) && (
          <>
            <NavList location={location} />
            <Button>Delegate a task</Button>
          </>
        )}
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;

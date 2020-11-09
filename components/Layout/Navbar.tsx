import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Hamburger from "../Hamburger";

const StyledNavbar = styled.nav<{ isSticky: boolean }>`
  margin: 0 auto;
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  box-shadow: ${({ isSticky }) =>
    isSticky ? "0 0 10px -8px #000000" : "none"};
  transition: box-shadow 0.5s ease;
  transform: scaleY(1) scaleX(1);

  .content-wrapper {
    max-width: 1400px;
    width: 100%;
    display: flex;
    margin: 0 auto;

    @media screen and (max-width: 998px) {
      justify-content: space-between;
    }
  }

  :before {
    content: "";
    display: block;
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: -2;
    right: 0;
    top: 0;
    background: url("/img/background.svg");
    background-size: 400%;
    background-repeat: no-repeat;
    background-position: 80px -20px;
    transition: transform 0.3s ease;
    transform-origin: top right;

    @media screen and (min-width: 998px) {
      background-size: 100%;
      width: 80%;
      height: 100%;
    }

    @media screen and (min-width: 1200px) {
      width: 70%;
    }

    @media screen and (min-width: 1400px) {
      width: 60%;
    }

    @media screen and (min-width: 2700px) {
      width: 53%;
    }

    ${({ isSticky }) =>
      isSticky &&
      `
      @media screen and (max-width: 997px) {
        transform: scaleY(0.7) scaleX(1.1);
      }
      
      @media screen and (min-width: 998px) {
        transform: scaleX(1.03);
    }
    `}
  }

  .navbar-burger {
    color: #ffffff;
    display: flex;

    i {
      margin: auto;
      font-size: 2rem;
    }
  }

  .navbar-brand {
    padding: 1rem;

    @media screen and (min-width: 998px) {
      padding-left: 2rem;
    }

    .navbar-item {
      padding: 0;
    }

    img {
      display: block;
      width: 180px;
      max-height: unset;
    }
  }
`;

const NavbarList = styled.ul<{ isActive?: boolean }>`
  display: flex;
  transform: ${({ isActive }) => (isActive ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.2s ease-in-out;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.darkerBlue};

  @media screen and (min-width: 998px) {
    position: static;
    background-color: unset;
    transform: none;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 1.1rem;

  :not(:last-child) {
    border-bottom: 1px solid #0d222e;

    @media screen and (min-width: 998px) {
      border-bottom: unset;
    }
  }

  @media screen and (min-width: 998px) {
    :last-child {
      padding-right: 2rem;
    }
  }

  a {
    color: #fff;
    padding: 1rem;
    display: block;
  }
`;

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    let isMenuSticky = isSticky;
    const checkScrollTop = () => {
      const scrollTop = document.scrollingElement.scrollTop;
      if (scrollTop > 0 && isMenuSticky === false) {
        isMenuSticky = true;
      } else if (scrollTop === 0 && isMenuSticky === true) {
        isMenuSticky = false;
      }
      setIsSticky(isMenuSticky);
    };

    document.addEventListener("scroll", checkScrollTop);

    return () => document.removeEventListener("scroll", checkScrollTop);
  }, []);

  const toggleMobileMenu = () => setIsMobileActive(!isMobileActive);

  return (
    <StyledNavbar
      role="navigation"
      aria-label="main navigation"
      isSticky={isSticky}
    >
      <div className="content-wrapper">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <img src="/img/logo.svg" />
            </a>
          </Link>
        </div>

        <Hamburger
          toggleMobileMenu={toggleMobileMenu}
          className={`${
            isMobileActive !== null
              ? isMobileActive
                ? "fade-in"
                : "fade-out"
              : ""
          }`}
          isActive={isMobileActive}
        ></Hamburger>

        <NavbarList isActive={isMobileActive}>
          <ListItem>
            <Link href="/">
              <a onClick={toggleMobileMenu}>Strona Główna</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/oferta">
              <a onClick={toggleMobileMenu}>Oferta</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/portfolio">
              <a onClick={toggleMobileMenu}>Portfolio</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/o-mnie">
              <a onClick={toggleMobileMenu}>O mnie</a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/kontakt">
              <a onClick={toggleMobileMenu}>Kontakt</a>
            </Link>
          </ListItem>
        </NavbarList>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Hamburger from "../Hamburger";

const StyledNavbar = styled.nav<{ isSticky: boolean }>`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  box-shadow: ${({ isSticky }) =>
    isSticky ? "0 0 10px -4px #8a8a8a" : "none"};
  transition: box-shadow 0.5s ease-in-out;
  transform: scaleY(1) scaleX(1);

  :before {
    content: "";
    display: block;
    width: 200px;
    height: 200px;
    position: absolute;
    z-index: -1;
    right: 0;
    top: 0;
    background: url("/img/background.svg");
    background-size: 400%;
    background-repeat: no-repeat;
    background-position: 80px -20px;
    transition: transform 0.3s ease;
    transform-origin: top right;

    ${({ isSticky }) =>
      isSticky &&
      `
      transform: scaleY(0.7) scaleX(1.1);
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
`;

const ListItem = styled.li`
  text-align: center;
  font-size: 1.1rem;

  :not(:last-child) {
    border-bottom: 1px solid #0d222e;
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
      className="navbar"
      role="navigation"
      aria-label="main navigation"
      isSticky={isSticky}
    >
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
    </StyledNavbar>
  );
};

export default Navbar;

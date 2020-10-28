import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNavbar = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;

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

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li``;

const Hamburger = styled.button<{ isActive?: boolean }>`
  background: ${({ isActive }) => (isActive ? "#0d222e" : "transparent")};
  border: none;
  outline: none;
  box-shadow: none;
  display: block;
  width: 50px;
  height: 50px;
  color: #fff;
  margin-right: 1rem;
  transition: background 0.2s ease-in-out;

  i {
    color: #fff;
    font-size: 2rem;
  }
`;

const Navbar = () => {
  const [isMobileActive, setIsMobileActive] = useState(false);

  const toggleMobileMenu = () => setIsMobileActive(!isMobileActive);

  return (
    <StyledNavbar
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
            <img src="/img/logo.svg" />
          </a>
        </Link>
      </div>

      <Hamburger onClick={toggleMobileMenu} isActive={isMobileActive}>
        <i className="fas fa-bars" aria-hidden="true"></i>
      </Hamburger>

      <NavbarList>
        <ListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </ListItem>
      </NavbarList>
    </StyledNavbar>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNavbar = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  background: #fff;

  :before {
    content: "";
    display: block;
    width: 200px;
    height: 200px;
    position: absolute;
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

const Navbar = () => {
  useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }, []);

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

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <i className="fas fa-bars" aria-hidden="true"></i>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Documentation</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

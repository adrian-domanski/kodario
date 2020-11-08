import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;
  position: relative;
  padding: 3rem 1rem 2rem;

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 100%;
    background-image: url("/img/footer-wave.svg");
    background-repeat: no-repeat;
    width: 100%;
    height: 55px;
    background-size: cover;
  }

  hr.divider {
    border: 1px solid #1b4d69;
    margin: 1rem 0;
  }

  p.lead {
    margin-top: 1.5rem;
  }

  a.footer-link {
    color: ${({ theme }) => theme.colors.lightWhite};
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover {
      color: #dadada;
    }
  }

  .social-icons {
    font-size: 2rem;
    display: flex;
    width: 50%;
    max-width: 200px;
    margin: 1.5rem auto;
    justify-content: space-around;

    i {
      transition: color 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        color: #dadada;
      }
    }
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
`;

const FooterList = styled.ul`
  margin-top: 1rem;

  i {
    margin-right: 0.5rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const FooterSection = styled.div`
  margin-top: 4rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterTitle>Kodario.pl</FooterTitle>
      <p className="lead">
        Tworzenie nowoczesnych stron internetowych w przystępnej cenie.
      </p>
      <div className="social-icons">
        <i className="fab fa-facebook" aria-hidden="true"></i>
        <i className="fab fa-github" aria-hidden="true"></i>
        <i className="fab fa-linkedin" aria-hidden="true"></i>
      </div>

      <FooterSection>
        <FooterTitle>Nawigacja</FooterTitle>
        <FooterList>
          <li>
            <Link href="/">
              <a className="footer-link">Strona Główna</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-link">O mnie</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-link">Oferta</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-link">Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="footer-link">Kontakt</a>
            </Link>
          </li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Kontakt</FooterTitle>
        <FooterList>
          <li>
            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
            Mosina, Śrem, Poznań
          </li>
          <li>
            <i className="fas fa-envelope" aria-hidden="true"></i>
            adrian.domanski.dev@gmail.com
          </li>
          <li>
            <i className="fab fa-facebook-f" aria-hidden="true"></i>
            <a className="footer-link" href="#">
              Napisz do nas na Facebooku
            </a>
          </li>
          <li>
            <i className="fas fa-mobile-alt" aria-hidden="true"></i>667 458 654
          </li>
        </FooterList>
      </FooterSection>
      <FooterSection>
        <hr className="divider" />
        <p>
          Wszelkie prawa zastrzeżone &copy; 2020 |{" "}
          <Link href="/">
            <a className="footer-link ">Kodario.pl</a>
          </Link>
        </p>
      </FooterSection>
    </StyledFooter>
  );
};

export default Footer;

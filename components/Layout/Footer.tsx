import React from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;
  position: relative;
  padding: 1rem;

  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 100%;
    background-image: url("/img/footer-wave.svg");
    background-repeat: no-repeat;
    width: 100vw;
    height: 7vw;
    background-size: cover;
  }

  hr.divider {
    border: 1px solid #1b4d69;
    margin: 1rem 0;
  }

  p.lead {
    margin-top: 1.5rem;
    line-height: 1.5;
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
    max-width: 135px;
    margin: 1.5rem auto;
    justify-content: space-between;

    @media screen and (min-width: 998px) {
      margin: 2rem auto 0 0;
    }

    i {
      transition: color 0.2s ease-in-out;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.lightWhite};

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
  margin-top: 1.5rem;
  line-height: 1.5;

  i {
    margin-right: 0.5rem;
  }

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const FooterSection = styled.div`
  margin-top: 3rem;

  @media screen and (min-width: 998px) {
    :last-of-type {
      width: 100%;
      grid-column: 1 / 4;
      text-align: center;
    }
  }
`;

const FooterContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (min-width: 998px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: left;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContentWrapper>
        <FooterSection>
          <FooterTitle>Kodario.pl</FooterTitle>
          <p className="lead">
            Tworzę nowoczesne strony internetowe w przystępnej cenie.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/kodariopl" target="_blank">
              <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/adrian-domanski" target="_blank">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adrian-domański-dev"
              target="_blank"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Nawigacja</FooterTitle>
          <FooterList>
            <li>
              <Link href="/">
                <a className="footer-link">Strona Główna</a>
              </Link>
            </li>
            <li>
              <Link href="/o-mnie">
                <a className="footer-link">O mnie</a>
              </Link>
            </li>
            <li>
              <Link href="/oferta">
                <a className="footer-link">Oferta</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio">
                <a className="footer-link">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/kontakt">
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
              kontakt@kodario.pl
            </li>
            <li>
              <i className="fab fa-facebook-f" aria-hidden="true"></i>
              <a
                className="footer-link"
                href="https://www.facebook.com/kodariopl"
                target="_blank"
              >
                Napisz do mnie na Facebooku
              </a>
            </li>
            <li>
              <i className="fas fa-mobile-alt" aria-hidden="true"></i>(+48) 667
              458 654
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
      </FooterContentWrapper>
    </StyledFooter>
  );
};

export default Footer;

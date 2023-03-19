import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterContentWrapper>
        <FooterSection>
          <FooterTitle>Kodario.co</FooterTitle>
          <p className='lead'>Elevate your web presence today.</p>
          <div className='social-icons'>
            <a
              href='https://github.com/adrian-domanski'
              target='_blank'
              rel='noopener'
              aria-label='GitHub'
            >
              <i className='fab fa-github' aria-hidden='true'></i>
            </a>
            <a
              href='https://www.linkedin.com/in/adrian-domanski-dev'
              target='_blank'
              aria-label='Linkedin'
              rel='noopener'
            >
              <i className='fab fa-linkedin' aria-hidden='true'></i>
            </a>
          </div>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Don't get lost</FooterTitle>
          <FooterList>
            <li>
              <Link href='/'>
                <a className='footer-link'>
                  <i className='fas fa-angle-right' />
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='footer-link'>
                  <i className='fas fa-angle-right' />
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/offer'>
                <a className='footer-link'>
                  <i className='fas fa-angle-right' />
                  Offer
                </a>
              </Link>
            </li>
            <li>
              <Link href='/portfolio'>
                <a className='footer-link'>
                  <i className='fas fa-angle-right' />
                  Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='footer-link'>
                  <i className='fas fa-angle-right' />
                  Contact
                </a>
              </Link>
            </li>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Stay in touch</FooterTitle>
          <FooterList>
            <li>
              <i className='fas fa-map-marker-alt' aria-hidden='true'></i>
              Poznań, Poland
            </li>
            <li>
              <i className='fas fa-envelope' aria-hidden='true'></i>
              <a
                href='mailto:contact@kodario.co'
                target='_blank'
                rel='noopener'
                className='footer-link'
              >
                contact@kodario.co
              </a>
            </li>
            <li>
              <i className='fab fa-linkedin' aria-hidden='true'></i>
              <a
                href='https://www.linkedin.com/in/adrian-domanski-dev'
                target='_blank'
                aria-label='Linkedin'
                className='footer-link'
                rel='noopener'
              >
                adrian-domanski-dev
              </a>
            </li>
            <li>
              <i className='fab fa-github' aria-hidden='true'></i>
              <a
                href='https://github.com/adrian-domanski'
                target='_blank'
                className='footer-link'
                rel='noopener'
                aria-label='GitHub'
              >
                adrian-domanski
              </a>
            </li>
            {/* <li>
              <i className='fab fa-facebook-f' aria-hidden='true'></i>
              <a
                className='footer-link'
                rel='noopener'
                href='https://www.facebook.com/kodariopl'
                target='_blank'
              >
                Napisz do nas na Facebooku
              </a>
            </li> */}
          </FooterList>
        </FooterSection>
        <FooterSection>
          <hr className='divider' />
          <p>
            All rights reserved &copy; {new Date().getFullYear()} |{' '}
            <Link href='/'>
              <a className='footer-link '>Kodario.co</a>
            </Link>
          </p>
        </FooterSection>
      </FooterContentWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;
  position: relative;
  padding: 1rem;

  :before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 100%;
    background-image: url('/img/footer-wave.svg');
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
    max-width: 80px;
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

export default Footer;

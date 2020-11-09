import React from "react";
import styled from "styled-components";
import Title from "../styles/components/Title";

const ParallaxWrapper = styled.div`
  background: url("/img/parallax.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 5rem 2rem 6rem;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;

  @media screen and (min-width: 998px) {
    padding: 6rem 2rem 4rem;
    background-attachment: fixed;
  }

  :before {
    content: "";
    display: block;
    background: ${({ theme }) => theme.colors.darkBlue};
    opacity: 0.7;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }

  h2 {
    margin-bottom: 2.5rem;
    margin-top: 0;

    :before {
      display: none;
    }
  }
`;

const ParallaxFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 998px) {
    flex-direction: row;
    max-width: 1200px;
    margin: 5rem auto 2rem;
  }
`;
const ParallaxFlexItem = styled.div`
  width: 100%;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 500;
  }

  i {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const Parallax = () => {
  return (
    <ParallaxWrapper>
      <Title isWhite>Rozwijaj swoją działalność w sieci</Title>
      <ParallaxFlex>
        <ParallaxFlexItem>
          <i className="fas fa-globe" aria-hidden="true"></i>
          <p>Strona internetowa</p>
        </ParallaxFlexItem>
        <ParallaxFlexItem>
          <i className="fab fa-facebook" aria-hidden="true"></i>
          <p>Media społecznościowe</p>
        </ParallaxFlexItem>
        <ParallaxFlexItem>
          <i className="fas fa-users" aria-hidden="true"></i>
          <p>Zadowoleni klienci</p>
        </ParallaxFlexItem>
        <ParallaxFlexItem>
          <i className="fas fa-signature" aria-hidden="true"></i>
          <p>Własna marka</p>
        </ParallaxFlexItem>
      </ParallaxFlex>
    </ParallaxWrapper>
  );
};

export default Parallax;

import React from "react";
import styled from "styled-components";
import Title from "../styles/components/Title";

const ParallaxWrapper = styled.div`
  background: url("/img/parallax.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 3rem 2rem;
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.lightWhite};
  text-align: center;

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
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    margin-top: 0;
  }
`;

const ParallaxFlex = styled.div`
  display: flex;
  flex-direction: column;
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

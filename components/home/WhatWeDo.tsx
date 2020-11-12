import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import Link from "next/link";
import ContentWrapper from "../../styles/components/ContentWrapper";
import SideText from "../../styles/components/SideText";

export const WhatWeDoItem = styled.div<{ number: string }>`
  text-align: center;
  max-width: 550px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    text-align: left;
    max-width: unset;

    &:nth-of-type(odd) {
      .content {
        padding-left: 2rem;
      }
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;

      .content {
        padding-right: 2rem;
      }
    }
  }

  :not(:last-of-type) {
    margin-bottom: 4rem;
  }

  img {
    width: 60%;
    margin: 0 auto;
    display: block;

    @media screen and (min-width: 768px) {
      width: 40%;
    }
  }

  p {
    color: ${({ theme }) => theme.colors.darkerBlue};
    line-height: 1.5;
    font-size: 1.1rem;
  }

  ${Title} {
    margin: 1rem 0;
    z-index: 1;
    position: relative;

    @media screen and (min-width: 768px) {
      text-align: left;
    }

    :before {
      content: "${(props) => props.number}";
      color: ${({ theme }) => theme.colors.darkerBlue};
      font-size: 7rem;
      display: block;
      position: absolute;
      top: -90px;
      z-index: 1;
      opacity: 0.04;
      font-weight: bold;

      @media screen and (max-width: 768px) {
        ${(props) =>
          parseFloat(props.number) % 2 == 0 ? "right: 0" : "left: 0"};
      }

      @media screen and (min-width: 768px) {
        top: -60px;
        left: -20px;
        font-size: 8rem;
      }
    }
  }
`;

export const WhatWeDoSection = styled(Section)`
  ${Button} {
    margin: 2rem auto 0;

    @media screen and (min-width: 768px) {
      margin: 3rem auto 0;
    }
  }
`;

const WhatWeDo = () => {
  return (
    <WhatWeDoSection id="home-start">
      <SideText text="Oferta" side="LEFT" />
      <ContentWrapper>
        <Title>Czym się zajmuję?</Title>
        <WhatWeDoItem number="1">
          <img
            src="/img/we-do-code.svg"
            alt="Tworzenie stron oraz aplikacji internetowych, programowanie"
          />
          <div className="content">
            <Title subTitle>Tworzenie stron i aplikacji internetowych</Title>
            <p>
              Stworzę dla Ciebię nowoczesną stronę, lub aplikację internetową.
              Zadbam o poprawne wyświetlanie treści na każdym urządzeniu.
            </p>
          </div>
        </WhatWeDoItem>
        <WhatWeDoItem number="2">
          <img
            src="/img/we-do-design.svg"
            alt="Projektowanie graficzne - tworzenie logotypów, banerów projektów stron internetowych"
          />
          <div className="content">
            <Title subTitle>Projektowanie graficzne</Title>
            <p>
              Zaprojektuję stronę internetową, logo, baner, lub inną grafikę na
              twoje potrzeby. Zadbam o odpowiednie dopasowanie kolorów, czcionek
              oraz pozostałych elementów.
            </p>
          </div>
        </WhatWeDoItem>
        <WhatWeDoItem number="3">
          <img
            src="/img/we-do-marketing.svg"
            alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
          />
          <div className="content">
            <Title subTitle>Budowa marki</Title>
            <p>
              Zaprojektuję logo, które zapadnie w pamięć oraz pomogę Ci w
              przeniesieniu twojej działalności do odpowiednich mediów
              społecznościowych.
            </p>
          </div>
        </WhatWeDoItem>
        <Link href="/oferta">
          <Button as="a">Zobacz więcej</Button>
        </Link>
      </ContentWrapper>
    </WhatWeDoSection>
  );
};

export default WhatWeDo;

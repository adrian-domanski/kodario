import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import Link from "next/link";
import ContentWrapper from "../../styles/components/ContentWrapper";
import SideText from "../../styles/components/SideText";
import CodeSVG from "../svg-animations/offer/CodeSVG";
import DesignSVG from "../svg-animations/offer/DesignSVG";
import SocialsSVG from "../svg-animations/offer/SocialsSVG";
import { Paragraph } from "../../styles/components/Paragraph";

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

  svg {
    width: 60%;
    margin: 0 auto;
    display: block;

    @media screen and (max-width: 767px) {
      margin-bottom: 2rem;
    }

    @media screen and (min-width: 768px) {
      width: 40%;
    }
  }

  & {
    svg {
      width: 100%;
    }
  }

  ${Paragraph} {
    font-size: 1.2rem;
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
      display: none;
      position: absolute;
      top: -90px;
      z-index: 1;
      opacity: 0.04;
      font-weight: bold;

      @media screen and (min-width: 768px) {
        display: block;
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
      <ContentWrapper>
        <SideText text="Oferta" side="LEFT" />
        <Title>Czym się zajmuję?</Title>
        <WhatWeDoItem number="1">
          <CodeSVG />
          <div className="content">
            <Title subTitle>Tworzenie stron i aplikacji internetowych</Title>
            <Paragraph>
              Stworzę dla Ciebię nowoczesną stronę, lub aplikację internetową.
              Zadbam o poprawne wyświetlanie treści na każdym urządzeniu.
            </Paragraph>
          </div>
        </WhatWeDoItem>
        <WhatWeDoItem number="2">
          <DesignSVG />
          <div className="content">
            <Title subTitle>Projektowanie graficzne</Title>
            <Paragraph>
              Zaprojektuję stronę internetową, logo, baner, lub inną grafikę na
              twoje potrzeby. Zadbam o odpowiednie dopasowanie kolorów, czcionek
              oraz pozostałych elementów.
            </Paragraph>
          </div>
        </WhatWeDoItem>
        <WhatWeDoItem number="3">
          <SocialsSVG />
          <div className="content">
            <Title subTitle>Budowa marki</Title>
            <Paragraph>
              Zaprojektuję logo, które zapadnie w pamięć oraz pomogę Ci w
              przeniesieniu twojej działalności do odpowiednich mediów
              społecznościowych.
            </Paragraph>
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

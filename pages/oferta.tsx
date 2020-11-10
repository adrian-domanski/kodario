import Header from "../components/home/Header";
import { WhatWeDoItem } from "../components/home/WhatWeDo";
import { WhatWeDoSection } from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import styled from "styled-components";
import { Paragraph } from "../styles/components/Paragraph";
import Button from "../styles/components/Button";
import SideText from "../styles/components/SideText";
import ContentWrapper from "../styles/components/ContentWrapper";
import Link from "next/link";

const GoToContact = styled(Section)`
  ${Button} {
    margin-top: 1.5rem;

    @media screen and (min-width: 998px) {
      margin-top: 2rem;
    }
  }
`;

const OfferPage: React.FC = () => {
  return (
    <Layout>
      <Header
        title="Moja oferta"
        img={{
          alt: "test",
          src: "/img/offer-header.svg",
          maxWidth: "70%",
        }}
        button={{
          href: "/kontakt",
          value: "Zapytaj o szczegóły",
        }}
        paragraph={{
          value: "Poznaj dokładny zakres, moich usług",
          isBlue: true,
        }}
        scrollToId="offer-start"
      />
      <WhatWeDoSection id="offer-start">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                eim expedita numquam ullam repellat aspernatur officia tempora
                ex maiores consequuntur.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                enim expedita numquam ullam repellat aspernatur officia tempora
                ex maiores consequuntur.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                enim expedita numquam ullam repellat aspernatur officia tempora
                ex maiores consequuntur.
              </p>
            </div>
          </WhatWeDoItem>
          <WhatWeDoItem number="4">
            <img
              src="/img/support.svg"
              alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
            />
            <div className="content">
              <Title subTitle>Wsparcie techniczne</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                enim expedita numquam ullam repellat aspernatur officia tempora
                ex maiores consequuntur.
              </p>
            </div>
          </WhatWeDoItem>
          <WhatWeDoItem number="5">
            <img
              src="/img/complex.svg"
              alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
            />
            <div className="content">
              <Title subTitle>Kompleksowa oferta</Title>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                enim expedita numquam ullam repellat aspernatur officia tempora
                ex maiores consequuntur.
              </p>
            </div>
          </WhatWeDoItem>
        </ContentWrapper>
      </WhatWeDoSection>
      <GoToContact darker footerSpace>
        <ContentWrapper>
          <Title>Masz pytanie do naszych usług?</Title>
          <Paragraph blueColor fontWeight="500" isCentered>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            alias culpa tempora veniam eligendi, dolore, rem quod earum
            asperiores laudantium dolorum voluptatem iure vel quaerat placeat?
            Reprehenderit eos eveniet molestias?
          </Paragraph>
          <Link href="/kontakt">
            <Button centered as="a">
              Kontakt
            </Button>
          </Link>
        </ContentWrapper>
      </GoToContact>
    </Layout>
  );
};

export default OfferPage;

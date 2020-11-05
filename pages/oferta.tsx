import Header from "../components/home/Header";
import { WhatWeDoItem } from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import styled from "styled-components";
import { Paragraph } from "../styles/components/Paragraph";
import Button from "../styles/components/Button";

const GoToContact = styled(Section)`
  ${Button} {
    margin-top: 1rem;
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
          value: "Poznaj dokładny zakres, naszych usług",
          isBlue: true,
        }}
      />
      <Section>
        <Title>Czym się zajmuję?</Title>
        <WhatWeDoItem number="1">
          <img
            src="/img/we-do-code.svg"
            alt="Tworzenie stron oraz aplikacji internetowych, programowanie"
          />
          <Title subTitle>Tworzenie stron i aplikacji internetowych</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            expedita numquam ullam repellat aspernatur officia tempora ex
            maiores consequuntur.
          </p>
        </WhatWeDoItem>
        <WhatWeDoItem number="2">
          <img
            src="/img/we-do-design.svg"
            alt="Projektowanie graficzne - tworzenie logotypów, banerów projektów stron internetowych"
          />
          <Title subTitle>Projektowanie graficzne</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            expedita numquam ullam repellat aspernatur officia tempora ex
            maiores consequuntur.
          </p>
        </WhatWeDoItem>
        <WhatWeDoItem number="3">
          <img
            src="/img/we-do-marketing.svg"
            alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
          />
          <Title subTitle>Budowa marki</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            expedita numquam ullam repellat aspernatur officia tempora ex
            maiores consequuntur.
          </p>
        </WhatWeDoItem>
        <WhatWeDoItem number="4">
          <img
            src="/img/support.svg"
            alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
          />
          <Title subTitle>Wsparcie techniczne</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            expedita numquam ullam repellat aspernatur officia tempora ex
            maiores consequuntur.
          </p>
        </WhatWeDoItem>
        <WhatWeDoItem number="5">
          <img
            src="/img/complex.svg"
            alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
          />
          <Title subTitle>Kompleksowa obsługa</Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
            expedita numquam ullam repellat aspernatur officia tempora ex
            maiores consequuntur.
          </p>
        </WhatWeDoItem>
      </Section>
      <GoToContact darker footerSpace>
        <Title>Masz pytanie do naszych usług?</Title>
        <Paragraph blueColor fontWeight="500" isCentered>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          alias culpa tempora veniam eligendi, dolore, rem quod earum asperiores
          laudantium dolorum voluptatem iure vel quaerat placeat? Reprehenderit
          eos eveniet molestias?
        </Paragraph>
        <Button centered as="a">
          Kontakt
        </Button>
      </GoToContact>
    </Layout>
  );
};

export default OfferPage;

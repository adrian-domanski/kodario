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
import OfferSVG from "../components/svg-animations/OfferSVG";
import SEO from "../components/SEO";
import CodeSVG from "../components/svg-animations/offer/CodeSVG";
import DesignSVG from "../components/svg-animations/offer/DesignSVG";
import SocialsSVG from "../components/svg-animations/offer/SocialsSVG";
import SupportSVG from "../components/svg-animations/offer/SupportSVG";
import ComplexSVG from "../components/svg-animations/offer/ComplexSVG";

const GoToContact = styled(Section)`
  ${Button} {
    margin-top: 1.5rem;

    @media screen and (min-width: 998px) {
      margin-top: 2rem;
    }
  }

  ${Paragraph} {
    margin-top: -1rem;
  }
`;

const OfferPage: React.FC = () => {
  return (
    <>
      <SEO
        pageTitle="Oferta - usługi"
        description="Poznaj zakres moich usług. Stworzę dla Ciebie stronę internetową, grafike, logo i zajmę się wszystkimi sprawami technicznymi. Świadczę szeroki zakres usług, abyś mógł powierzyć mi cały projekt."
      />
      <Layout>
        <Header
          title="Moja oferta"
          svg={{
            component: <OfferSVG />,
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
          <ContentWrapper>
            <SideText text="Oferta" side="LEFT" />
            <Title>Czym się zajmuję?</Title>
            <WhatWeDoItem number="1">
              <CodeSVG />
              <div className="content">
                <Title subTitle>
                  Tworzenie stron i aplikacji internetowych
                </Title>
                <Paragraph>
                  Stworzę dla Ciebię nowoczesną stronę, lub aplikację
                  internetową. Zadbam o poprawne wyświetlanie treści na każdym
                  urządzeniu.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number="2">
              <DesignSVG />
              <div className="content">
                <Title subTitle>Projektowanie graficzne</Title>
                <Paragraph>
                  Zaprojektuję stronę internetową, logo, baner, lub inną grafikę
                  na twoje potrzeby. Zadbam o odpowiednie dopasowanie kolorów,
                  czcionek oraz pozostałych elementów.
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
            <WhatWeDoItem number="4">
              <SupportSVG />
              <div className="content">
                <Title subTitle>Wsparcie techniczne</Title>
                <Paragraph>
                  Zajmę się wszystkimi sprawami technicznymi związanymi z
                  projektem. Na moją pomoc możesz liczyć również po wykonanym
                  zadaniu - dopilnuje, abyś był zadowolony z moich usług.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number="5">
              <ComplexSVG />
              <div className="content">
                <Title subTitle>Kompleksowa oferta</Title>
                <Paragraph>
                  Staram się zapewnić szeroki zakres usług, abyś mógł powierzyć
                  mi cały projekt. Nie musisz szukać osobno grafika, programisty
                  i osoby, która zadba o pozycjonowanie twojej strony.
                </Paragraph>
              </div>
            </WhatWeDoItem>
          </ContentWrapper>
        </WhatWeDoSection>
        <GoToContact darker footerSpace>
          <ContentWrapper>
            <Title>Masz pytanie do moich usług?</Title>
            <Paragraph blueColor fontWeight="500" isCentered>
              Chętnie odpowiem na Twoje pytania i rozwieje wszelkie wątpliwości.
              Jeżeli nie jesteś pewien, czego potrzebujesz, skontaktuj się ze
              mną!
            </Paragraph>
            <Link href="/kontakt">
              <Button centered as="a">
                Kontakt
              </Button>
            </Link>
          </ContentWrapper>
        </GoToContact>
      </Layout>
    </>
  );
};

export default OfferPage;

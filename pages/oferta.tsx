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
                Zaprojektuję stronę internetową, logo, baner, lub inną grafikę
                na twoje potrzeby. Zadbam o odpowiednie dopasowanie kolorów,
                czcionek oraz pozostałych elementów.
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
          <WhatWeDoItem number="4">
            <img
              src="/img/support.svg"
              alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
            />
            <div className="content">
              <Title subTitle>Wsparcie techniczne</Title>
              <p>
                Zajmę się wszystkimi sprawami technicznymi związanymi z
                projektem. Możesz liczyć na moją pomoc również po wykonanym
                zadaniu!
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
                Staram się zapewnić szeroki zakres usług, abyś mógł powierzyć mi
                cały projekt. Nie musisz szukać osobno grafika, programisty i
                osoby, która zadba o pozycjonowanie twojej strony!
              </p>
            </div>
          </WhatWeDoItem>
        </ContentWrapper>
      </WhatWeDoSection>
      <GoToContact darker footerSpace>
        <ContentWrapper>
          <Title>Masz pytanie do moich usług?</Title>
          <Paragraph blueColor fontWeight="500" isCentered>
            Chętnie odpowiem na Twoje pytania i rozwieje wszelkie wątpliwości.
            Jeżeli nie jesteś pewien, czego potrzebujesz, skontaktuj się ze mną!
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

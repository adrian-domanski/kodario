import Header from '../components/home/Header';
import { WhatWeDoItem } from '../components/home/WhatWeDo';
import { WhatWeDoSection } from '../components/home/WhatWeDo';
import Layout from '../components/Layout/Layout';
import Section from '../styles/components/Section';
import Title from '../styles/components/Title';
import styled from 'styled-components';
import { Paragraph } from '../styles/components/Paragraph';
import Button from '../styles/components/Button';
import SideText from '../styles/components/SideText';
import ContentWrapper from '../styles/components/ContentWrapper';
import Link from 'next/link';
import OfferSVG from '../components/svg-animations/OfferSVG';
import SEO from '../components/SEO';
import CodeSVG from '../components/svg-animations/offer/CodeSVG';
import DesignSVG from '../components/svg-animations/offer/DesignSVG';
import SocialsSVG from '../components/svg-animations/offer/SocialsSVG';
import SupportSVG from '../components/svg-animations/offer/SupportSVG';
import ComplexSVG from '../components/svg-animations/offer/ComplexSVG';

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
        pageTitle='Oferta - usługi'
        description='Poznaj zakres moich usług. Stworzę dla Ciebie stronę internetową, grafike, logo i zajmę się wszystkimi sprawami technicznymi. Świadczę szeroki zakres usług, abyś mógł powierzyć mi cały projekt.'
      />
      <Layout>
        <Header
          title='Moja oferta'
          svg={{
            component: <OfferSVG />,
            maxWidth: '70%',
          }}
          button={{
            href: '/kontakt',
            value: 'Zapytaj o szczegóły',
          }}
          paragraph={{
            value: 'Poznaj dokładny zakres, moich usług',
            isBlue: true,
          }}
          scrollToId='offer-start'
        />
        <WhatWeDoSection id='offer-start'>
          <ContentWrapper>
            <SideText text='Oferta' side='LEFT' />
            <Title>Jakie usługi oferuję?</Title>
            <WhatWeDoItem number='1'>
              <CodeSVG />
              <div className='content'>
                <Title subTitle>
                  Tworzenie stron i aplikacji internetowych
                </Title>
                <Paragraph>
                  Zajmujemy się tworzeniem <b>nowoczesnych</b> stron i aplikacji
                  internetowych. Projektując nasze witryny zwracamy uwagę na
                  popularne <b>trendy</b>, aby zwrócić uwagę odwiedzających i
                  wyróżnić się z tłumu.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='2'>
              <DesignSVG />
              <div className='content'>
                <Title subTitle>Projekty graficzne</Title>
                <Paragraph>
                  Projektujemy <b>loga</b>, <b>banery</b> i inne grafiki
                  potrzebne do przedstawienia Twojego biznesu w sieci. W naszej
                  pracy stawiamy na <b>oryginalność</b>, która zapadnie w pamięć
                  Twoim przyszłym klientom.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='3'>
              <SocialsSVG />
              <div className='content'>
                <Title subTitle>Budowa marki</Title>
                <Paragraph>
                  Pomożemy Ci w przeniesieniu Twojej działalności do mediów
                  społecznościowych. Stworzymy odpowiednie grafiki i znajdziemy
                  sposób na <b>zbudowanie stałego grona odbiorców</b>.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='4'>
              <SupportSVG />
              <div className='content'>
                <Title subTitle>Wsparcie techniczne</Title>
                <Paragraph>
                  Zajmiemy się wszystkimi sprawami technicznymi związanymi z
                  projektem. Na naszą <b>pomoc</b> możesz liczyć również po
                  wykonanym zadaniu - dopilnujemy, abyś był <b>zadowolony</b> z
                  naszych usług.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='5'>
              <ComplexSVG />
              <div className='content'>
                <Title subTitle>Kompleksowa oferta</Title>
                <Paragraph>
                  Staramy się zapewnić <b>szeroki zakres usług</b>, abyś mógł
                  powierzyć nam cały projekt. Nie musisz szukać osobno grafika,
                  programisty i osoby, która zadba o pozycjonowanie Twojej
                  strony.
                </Paragraph>
              </div>
            </WhatWeDoItem>
          </ContentWrapper>
        </WhatWeDoSection>
        <GoToContact darker footerSpace>
          <ContentWrapper>
            <Title>Masz pytanie do naszych usług?</Title>
            <Paragraph blueColor fontWeight='500' isCentered>
              Chętnie odpowiemy na Twoje pytania i rozwiejemy wszelkie
              wątpliwości. Jeżeli nie jesteś pewien, czego potrzebujesz,
              skontaktuj się z nami!
            </Paragraph>
            <Link href='/kontakt'>
              <Button centered href='/kontakt' as='a'>
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

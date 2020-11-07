import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import styled from "styled-components";
import Title from "../styles/components/Title";
import { Paragraph } from "../styles/components/Paragraph";
import Button from "../styles/components/Button";

const TrustMeGrid = styled.div`
  display: grid;
`;

const TrustMeGridItem = styled.div`
  text-align: center;
  background: #fff;
  padding: 2rem;
  border-radius: 25px;
  box-shadow: 0 0 10px -8px #808080;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  .icon {
    display: block;
    position: relative;
    width: 100px;
    margin: 0 auto;

    :before {
      content: "";
      background: url("/img/blob.svg") no-repeat;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 90px;
      height: 74px;
      background-size: cover;
      z-index: 2;
    }
  }

  i {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    position: relative;
    z-index: 3;
  }

  p {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.darkerBlue};
  }
`;

const AboutMeSection = styled(Section)`
  img {
    display: block;
    width: 85%;
    max-width: 300px;
    margin: 0 auto;
  }

  ${Paragraph} {
    text-align: center;
    margin-top: 1rem;
  }

  ${Button} {
    margin: 1.5rem auto 0;
  }
`;

const AboutMePage = () => {
  return (
    <Layout>
      <Header
        img={{ src: "/img/header/about-me.svg", alt: "Niewielka grupa ludzi" }}
        title="O mnie"
        paragraph={{ value: "Dowiedz się więcej o mojej osobie", isBlue: true }}
      />
      <AboutMeSection>
        <Title>Kilka słów o mnie</Title>
        <img src="/img/me.png" alt="Moje zdjęcie w Hiszpani" />
        <Paragraph>
          Nazywam się <b>Adrian Domański</b> i mieszkam pod Poznaniem.
          Tworzeniem stron i aplikacji internetowych zajmuje się od 3 lat. Łączę
          swoją pasję do programowania z grafiką i staram się tworzyć nowoczesne
          produkty, które spełniają swoje zadania w sieci.
        </Paragraph>
        <Button as="a" href="https://adrian-domanski.pl" target="_blank">
          Moja strona
        </Button>
      </AboutMeSection>
      <Section footerSpace darker>
        <Title>Dlaczego warto mi zaufać?</Title>
        <TrustMeGrid>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-tasks" />
            </div>
            <p>Odpowiedznialnie wykonuje swoje zadania</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-hands-helping" />
            </div>
            <p>Dbam o dobrą opinię swoich klientów</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-headset" />
            </div>
            <p>Oferuje wsparcie techniczne</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-laptop-code" />
            </div>
            <p>Posiadam praktyczne doświadczenie</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-cubes" />
            </div>
            <p>Oferuje kompleksowy zakres usług</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <div className="icon">
              <i className="fas fa-dollar-sign" />
            </div>
            <p>Oferuje produkty w przystępnej cenie</p>
          </TrustMeGridItem>
        </TrustMeGrid>
      </Section>
    </Layout>
  );
};

export default AboutMePage;

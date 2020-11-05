import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import styled from "styled-components";
import Title from "../styles/components/Title";

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

  i {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.darkerBlue};
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
      <Section footerSpace>
        <Title>Dlaczego warto mi zaufać?</Title>
        <TrustMeGrid>
          <TrustMeGridItem>
            <i className="fas fa-tasks" />
            <p>Odpowiedznialnie wykonuje swoje zadania</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <i className="fas fa-hands-helping" />
            <p>Dbam o dobrą opinię swoich klientów</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <i className="fas fa-headset" />
            <p>Oferuje wsparcie techniczne</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <i className="fas fa-laptop-code" />
            <p>Posiadam praktyczne doświadczenie</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <i className="fas fa-cubes" />
            <p>Oferuje kompleksowy zakres usług</p>
          </TrustMeGridItem>
          <TrustMeGridItem>
            <i className="fas fa-dollar-sign" />
            <p>Oferuje produkty w przystępnej cenie</p>
          </TrustMeGridItem>
        </TrustMeGrid>
      </Section>
    </Layout>
  );
};

export default AboutMePage;

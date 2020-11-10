import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import styled from "styled-components";

export const PortfolioGridItem = styled.img`
  display: block;
  width: 100%;

  :last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }
`;

const PortfolioPage = () => {
  return (
    <Layout>
      <Header
        title="Portoflio"
        img={{
          src: "/img/header/portfolio.svg",
          alt: "Przedstawienie moich prac i umiejętności",
        }}
        paragraph={{
          isBlue: true,
          value: "Zapoznaj się z moimi dotychczasowymi projektami",
        }}
        scrollToId="portfolio-start"
      />
      <Section footerSpace id="portfolio-start">
        <Title>Realizacje</Title>
        <PortfolioGrid>
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
        </PortfolioGrid>
      </Section>
    </Layout>
  );
};

export default PortfolioPage;

import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import styled from "styled-components";
import ContentWrapper from "../styles/components/ContentWrapper";
import Link from "next/link";
import SideText from "../styles/components/SideText";

export const PortfolioImage = styled.img`
  display: block;
  width: 100%;

  :last-child {
    margin-bottom: 0;
  }
`;

const CustomContentWrapper = styled(ContentWrapper)`
  max-width: 1100px;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PortfolioGridItem = styled.div`
  transition: transform 0.2s ease-in;
  transform: scale(0.95);

  :hover {
    transform: scale(1);
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
        <CustomContentWrapper>
          <Title>Realizacje</Title>
          <PortfolioGrid>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/plan-szkolny`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/${123}`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/${123}`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/${123}`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/${123}`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
            <PortfolioGridItem>
              <Link href="/portfolio/[slug]" as={`/portfolio/${123}`}>
                <a>
                  <PortfolioImage
                    src="/img/portfolio/portfolio-1.jpg"
                    alt="#"
                  />
                </a>
              </Link>
            </PortfolioGridItem>
          </PortfolioGrid>
        </CustomContentWrapper>
      </Section>
    </Layout>
  );
};

export default PortfolioPage;

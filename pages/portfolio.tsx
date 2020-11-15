import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import styled from "styled-components";
import ContentWrapper from "../styles/components/ContentWrapper";
import Link from "next/link";
import { getOtherPosts } from "./portfolio/[slug]";

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

interface IProps {
  portfolioList: [any];
}

const PortfolioPage: React.FC<IProps> = ({ portfolioList }) => {
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
            {portfolioList.map((product, index) => (
              <PortfolioGridItem key={index}>
                <Link
                  href="/portfolio/[slug]"
                  as={`/portfolio/${product.slug}`}
                >
                  <a>
                    <PortfolioImage
                      src={`/content/${product.slug}/${product.image}`}
                      alt="#"
                    />
                  </a>
                </Link>
              </PortfolioGridItem>
            ))}
          </PortfolioGrid>
        </CustomContentWrapper>
      </Section>
    </Layout>
  );
};

export async function getStaticProps() {
  const portfolioList = await getOtherPosts();

  return {
    props: {
      portfolioList,
    },
  };
}

export default PortfolioPage;

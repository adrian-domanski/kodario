import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import {
  PortfolioGrid,
  PortfolioGridItem,
  PortfolioImage,
} from "../../pages/portfolio";
import ContentWrapper from "../../styles/components/ContentWrapper";
import SideText from "../../styles/components/SideText";
import Link from "next/link";

const CustomSection = styled(Section)`
  position: relative;

  ${Button} {
    margin-top: 2rem;
  }
`;

const CustomPortfolioGrid = styled(PortfolioGrid)`
  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface IProps {
  portfolioList: [any];
}

const OurWork: React.FC<IProps> = ({ portfolioList }) => {
  return (
    <CustomSection darker>
      <ContentWrapper>
        <SideText side="RIGHT" text="portfolio" />
        <Title>Przykładowe realizacje</Title>
        <CustomPortfolioGrid>
          {portfolioList.map((product, index) => (
            <PortfolioGridItem key={index}>
              <Link href="/portfolio/[slug]" as={`/portfolio/${product.slug}`}>
                <a>
                  <PortfolioImage
                    src={`/content/${product.slug}/${product.image}`}
                    alt={`Zdjęcie projektu ${product.title} na urządzeniu.`}
                  />
                </a>
              </Link>
            </PortfolioGridItem>
          ))}
        </CustomPortfolioGrid>
        <Link href="/portfolio">
          <Button centered as="a">
            Zobacz więcej
          </Button>
        </Link>
      </ContentWrapper>
    </CustomSection>
  );
};

export default OurWork;

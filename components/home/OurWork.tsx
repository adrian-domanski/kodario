import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import { PortfolioGrid, PortfolioGridItem } from "../../pages/portfolio";
import ContentWrapper from "../../styles/components/ContentWrapper";
import SideText from "../../styles/components/SideText";

const CustomSection = styled(Section)`
  position: relative;

  ${Button} {
    margin-top: 2rem;
  }
`;

const OurWork = () => {
  return (
    <CustomSection darker>
      <SideText side="RIGHT" text="portfolio" />
      <ContentWrapper>
        <Title>Przykładowe realizacje</Title>
        <PortfolioGrid>
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioGridItem src="/img/portfolio/portfolio-1.jpg" alt="#" />
        </PortfolioGrid>
        <Button centered>Zobacz więcej</Button>
      </ContentWrapper>
    </CustomSection>
  );
};

export default OurWork;

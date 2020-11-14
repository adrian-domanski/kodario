import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import { PortfolioGrid, PortfolioImage } from "../../pages/portfolio";
import ContentWrapper from "../../styles/components/ContentWrapper";
import SideText from "../../styles/components/SideText";

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

const OurWork = () => {
  return (
    <CustomSection darker>
      <ContentWrapper>
        <SideText side="RIGHT" text="portfolio" />
        <Title>Przykładowe realizacje</Title>
        <CustomPortfolioGrid>
          <PortfolioImage src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioImage src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioImage src="/img/portfolio/portfolio-1.jpg" alt="#" />
          <PortfolioImage src="/img/portfolio/portfolio-1.jpg" alt="#" />
        </CustomPortfolioGrid>
        <Button centered>Zobacz więcej</Button>
      </ContentWrapper>
    </CustomSection>
  );
};

export default OurWork;

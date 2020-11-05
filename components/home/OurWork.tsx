import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import { PortfolioGrid, PortfolioGridItem } from "../../pages/portfolio";

const CustomSection = styled(Section)`
  ${Button} {
    margin-top: 1rem;
  }
`;

const OurWork = () => {
  return (
    <CustomSection darker>
      <Title>Przykładowe realizacje</Title>
      <PortfolioGrid>
        <PortfolioGridItem
          className="column is-6"
          src="/img/portfolio/portfolio-1.jpg"
          alt="#"
        />
        <PortfolioGridItem
          className="column is-6"
          src="/img/portfolio/portfolio-1.jpg"
          alt="#"
        />
        <PortfolioGridItem
          className="column is-6"
          src="/img/portfolio/portfolio-1.jpg"
          alt="#"
        />
      </PortfolioGrid>
      <Button centered>Zobacz więcej</Button>
    </CustomSection>
  );
};

export default OurWork;

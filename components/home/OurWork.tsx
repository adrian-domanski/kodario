import React from "react";
import Sectiong from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import Section from "../../styles/components/Section";

const PortfolioGridItem = styled.img`
  display: block;
  margin: 0 auto;
`;

const ColumnsWrapper = styled.div`
  max-width: 800px;
`;

const CustomSection = styled(Section)`
  margin-top: 2rem;
`;

const OurWork = () => {
  return (
    <CustomSection darker>
      <Title>Przykładowe realizacje</Title>
      <ColumnsWrapper className="columns is-multiline">
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
      </ColumnsWrapper>
      <Button centered>Zobacz więcej</Button>
    </CustomSection>
  );
};

export default OurWork;

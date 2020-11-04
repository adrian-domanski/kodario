import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";
import Button from "../../styles/components/Button";

const PortfolioGridItem = styled.img`
  display: block;
  margin: 1rem auto;

  :last-child {
    margin-bottom: 0;
  }
`;

const ColumnsWrapper = styled.div`
  max-width: 800px;
`;

const CustomSection = styled(Section)`
  ${Button} {
    margin-top: 1rem;
  }
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

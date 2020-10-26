import React from "react";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import styled from "styled-components";

const WhatWeDoItem = styled.div<{ number: string }>`
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  img {
    width: 60%;
    margin: 0 auto;
    display: block;
  }

  p {
    color: ${({ theme }) => theme.colors.darkerBlue};
  }

  ${Title} {
    margin: 1rem 0;
    position: relative;
    z-index: 1;

    :before {
      content: "${(props) => props.number}";
      color: ${({ theme }) => theme.colors.darkerBlue};
      font-size: 7rem;
      display: block;
      position: absolute;
      top: -90px;
      z-index: -1;
      ${(props) =>
        parseFloat(props.number) % 2 == 0 ? "right: 0" : "left: 0"};
      opacity: 0.07;
      font-weight: bold;
    }
  }
`;

const WhatWeDo = () => {
  return (
    <Section>
      <Title>Czym się zajmuję?</Title>
      <WhatWeDoItem number="1">
        <img
          src="/img/we-do-code.svg"
          alt="Tworzenie stron oraz aplikacji internetowych, programowanie"
        />
        <Title subTitle>Tworzenie stron i aplikacji internetowych</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
          expedita numquam ullam repellat aspernatur officia tempora ex maiores
          consequuntur.
        </p>
      </WhatWeDoItem>
      <WhatWeDoItem number="2">
        <img
          src="/img/we-do-design.svg"
          alt="Projektowanie graficzne - tworzenie logotypów, banerów projektów stron internetowych"
        />
        <Title subTitle>Projektowanie graficzne</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
          expedita numquam ullam repellat aspernatur officia tempora ex maiores
          consequuntur.
        </p>
      </WhatWeDoItem>
      <WhatWeDoItem number="3">
        <img
          src="/img/we-do-marketing.svg"
          alt="Tworzenie mediów społecznościowych w celu zwiększenia zasięgów i pozyskaniu nowych klientów"
        />
        <Title subTitle>Budowa marki</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae enim
          expedita numquam ullam repellat aspernatur officia tempora ex maiores
          consequuntur.
        </p>
      </WhatWeDoItem>
    </Section>
  );
};

export default WhatWeDo;

import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import { Paragraph } from "../../styles/components/Paragraph";

const StyledHomeHeader = styled.header`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  background: #fff;
  padding: 3.5rem 2rem 3rem;

  @media screen and (min-width: 768px) {
    padding: 4.5rem 2rem 4rem;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    max-width: 500px;
    margin: 0 auto;

    @media screen and (min-width: 800px) {
      font-size: 2.2rem;
    }
  }

  a {
    display: table;
    margin-top: 1rem;
  }

  ${Paragraph} {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }

  ${Button} {
    margin-top: 1.5rem;

    @media screen and (min-width: 768px) {
      font-size: 1.3rem;
      padding: 0.8rem 2.6rem;
    }
  }
`;

const StyledImage = styled.img<{ maxWidth?: string }>`
  margin: 2rem auto 0 auto;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "90%")};
  width: 100%;
  display: block;

  @media screen and (min-width: 600px) {
    max-width: 70%;
    margin: 3rem auto 2rem auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 65%;
    margin: 3rem auto 2rem auto;
  }
`;

interface IProps {
  title: string;
  img: {
    src: string;
    alt: string;
    maxWidth?: string;
  };
  button?: {
    href: string;
    value: string;
    externalPage?: boolean;
  };
  paragraph?: {
    value: string;
    isBlue?: boolean;
  };
}

const Header: React.FC<IProps> = ({ title, button, img, paragraph }) => {
  return (
    <StyledHomeHeader>
      <h1>{title}</h1>
      {paragraph && (
        <Paragraph blueColor={paragraph.isBlue}>{paragraph.value}</Paragraph>
      )}
      <StyledImage src={img.src} alt={img.alt} maxWidth={img.maxWidth} />
      {button &&
        (button.externalPage ? (
          <Button as="a" href={button.href} target="_blank" centered>
            {button.value}
          </Button>
        ) : (
          <Link href={button.href}>
            <Button as="a" centered>
              {button.value}
            </Button>
          </Link>
        ))}
    </StyledHomeHeader>
  );
};

export default Header;

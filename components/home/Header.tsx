import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/Button";
import { Paragraph } from "../../styles/components/Paragraph";
import ScrollBottomIcon from "../ScrollBottomIcon";

interface StyledHomeHeaderProps {
  paragraph?: boolean;
  showList?: boolean;
}
const StyledHomeHeader = styled.header<StyledHomeHeaderProps>`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  position: relative;
  margin-top: -70px;
  padding: 3.5rem 2rem;

  @media screen and (min-width: 998px) {
    padding: 4.5rem 2rem 10rem;
  }

  .content-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (min-width: 998px) {
      display: grid;
      row-gap: 2rem;
      padding: 8rem 0;
      text-align: left;
      grid-template-columns: 55% 45%;
      ${({ paragraph, showList }) => {
        return `
          grid-auto-rows: 1fr ${paragraph ? "auto" : ""} ${
          showList ? "auto" : ""
        } 1fr;
        `;
      }}
      align-items: center;
      grid-template-areas:
        "title img"
        ${({ paragraph }) => paragraph && '"paragraph img"'}
        ${({ showList }) => showList && '"list img"'}
        "button img";

      :before {
        content: "";
        display: block;
        width: 80%;
        height: 100%;
        position: absolute;
        z-index: -1;
        right: 0;
        top: 0px;
        background: url("/img/background.svg");
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: 80px -20px;
        transition: transform 0.3s ease;
        transform-origin: top right;
      }
    }

    @media screen and (min-width: 1200px) {
      :before {
        width: 70%;
      }
    }

    @media screen and (min-width: 1400px) {
      :before {
        width: 60%;
      }
    }

    @media screen and (min-width: 2700px) {
      :before {
        width: 53%;
      }
    }
  }

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-color: #fff;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
    max-width: 500px;
    margin: 4rem auto 0;
    grid-area: title;

    @media screen and (min-width: 800px) {
      font-size: 2.2rem;
    }

    @media screen and (min-width: 998px) {
      max-width: unset;
      margin-top: 0;
      margin-left: 0;
      align-self: flex-end;
    }

    @media screen and (min-width: 1200px) {
      font-size: 2.5rem;
    }
  }

  ${Paragraph} {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
    grid-area: paragraph;

    @media screen and (min-width: 998px) {
      margin: 0 0 2rem 0;
    }
  }

  ${Button} {
    margin-top: 1.5rem;
    grid-area: button;
    font-size: 1.3rem;
    padding: 0.8rem 2.6rem;

    @media screen and (min-width: 998px) {
      margin-right: auto;
      margin-left: unset;
      margin-top: 0;
      align-self: flex-start;
    }
  }
`;

const StyledImage = styled.img<{ maxWidth?: string }>`
  margin: 2rem auto 0 auto;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "90%")};
  width: 100%;
  display: block;
  border-radius: 5px;
  grid-area: img;

  @media screen and (min-width: 600px) {
    max-width: 70%;
    margin: 3rem auto 2rem auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 50%;
    margin: 3rem auto 2rem auto;
  }

  @media screen and (min-width: 998px) {
    max-width: unset;
    margin: 0;
  }
`;

const StyledList = styled.ul`
  grid-area: list;
  line-height: 1.5;

  li {
    font-size: 1.4rem;

    :before {
      content: "\f105";
      font-weight: bold;
      margin-right: 5px;
      font-family: "Font Awesome 5 Free";
    }

    @media screen and (min-width: 1200px) {
      font-size: 1.7rem;
    }
  }

  @media screen and (max-width: 997px) {
    display: none;
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
  showList?: boolean;
  scrollToId?: string;
}

const Header: React.FC<IProps> = ({
  title,
  button,
  img,
  paragraph,
  showList,
  scrollToId,
}) => {
  return (
    <StyledHomeHeader paragraph={!!paragraph} showList={showList}>
      <div className="content-wrapper">
        <h1>{title}</h1>
        {paragraph && (
          <Paragraph blueColor={paragraph.isBlue}>{paragraph.value}</Paragraph>
        )}
        {showList && (
          <StyledList>
            <li>Strony internetowe</li>
            <li>Projekty graficzne</li>
            <li>Budowa marki</li>
          </StyledList>
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
      </div>
      {scrollToId && <ScrollBottomIcon scrollToId={scrollToId} />}
    </StyledHomeHeader>
  );
};

export default Header;

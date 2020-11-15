import matter from "gray-matter";
import { NextPage } from "next";
import React from "react";
import Header from "../../components/home/Header";
import Layout from "../../components/Layout/Layout";
import SEO from "../../components/SEO";
import ContentWrapper from "../../styles/components/ContentWrapper";
import { Paragraph } from "../../styles/components/Paragraph";
import Section from "../../styles/components/Section";
import Title from "../../styles/components/Title";
import { getFileNames } from "../../utils/helpers";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import SideText from "../../styles/components/SideText";
import Button from "../../styles/components/Button";
import Link from "next/link";

const TechList = styled.ul`
  display: grid;
  line-height: 1.5;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const TechListItem = styled.li`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 998px) {
    font-size: 1.5rem;
  }

  :before {
    content: "\f105";
    font-family: "Font Awesome 5 Free";
    font-weight: bold;
    padding-right: 8px;
  }
`;

const OtherList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 998px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const OtherPostsSection = styled(Section)`
  ${Button} {
    margin-top: 1.5rem;

    @media screen and (min-width: 998px) {
      margin-top: 2rem;
    }
  }

  a.link {
    transform: scale(0.98);
    transition: transform 0.15s ease-in;

    @media screen and (max-width: 997px) {
      max-width: 500px;
      :not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    :hover {
      transform: scale(1);
    }

    display: block;
    width: 100%;
    cursor: pointer;
  }

  ${Button}
`;

const OtherListItem = styled.img`
  display: block;
  width: 100%;

  @media screen and (min-width: 998px) {
    width: 98%;
  }
`;

const InformationSection = styled(Section)`
  position: relative;

  .subtitle {
    text-align: left;
    margin-bottom: 2rem;
    font-size: 1.5rem;

    @media screen and (min-width: 998px) {
      font-size: 1.6rem;
    }
  }

  ${Button} {
    margin-top: 2rem;
  }
`;

const GalleryWrapper = styled.div`
  margin-bottom: 3rem;
`;

interface IProps {
  markdown?: any;
  otherPosts?: [any];
}

const PortfolioDetails: NextPage<IProps> = ({
  markdown,
  otherPosts: otherProducts,
}) => {
  const images = markdown.images.map((image) => ({
    original: `/content/${markdown.data.slug}/${image}`,
    thumbnail: `/content/${markdown.data.slug}/${image}`,
  }));

  return (
    <>
      <SEO />
      <Layout>
        <Header
          title={markdown.data.title}
          img={{
            src: `/content/${markdown.data.slug}/${markdown.images[0]}`,
            alt: "",
          }}
          paragraph={{
            isBlue: true,
            value: "Dodatkowe informacje dotyczące projektu",
          }}
          button={{
            href: markdown.data.pageLive,
            value: "Odwiedź stronę",
            externalPage: true,
          }}
          scrollToId="project-start"
        />
        <InformationSection id="project-start">
          <ContentWrapper>
            <SideText side="LEFT" text="PROJEKT" />
            <Title>Informacje o projekcie</Title>
            <GalleryWrapper>
              <ImageGallery items={images} />
            </GalleryWrapper>
            <Title subTitle className="subtitle">
              Krótki opis projektu
            </Title>
            <Paragraph>{markdown.content}</Paragraph>
            {markdown.data.pageCode && <Button>Zobacz kod</Button>}
          </ContentWrapper>
        </InformationSection>
        <Section darker>
          <ContentWrapper>
            <Title>Wykorzystane rozwiązania</Title>
            <TechList>
              {markdown.data.tech.map((item, index) => (
                <TechListItem key={index}>{item}</TechListItem>
              ))}
            </TechList>
          </ContentWrapper>
        </Section>
        <OtherPostsSection footerSpace>
          <ContentWrapper maxWidth={1100}>
            <Title>Zobacz również</Title>
            <OtherList>
              {otherProducts.map((product, index) => (
                <Link
                  key={index}
                  href="/portfolio/[slug]"
                  as={`/portfolio/${product.slug}`}
                >
                  <a className="link">
                    <OtherListItem
                      src={`/content/${product.slug}/${product.image}`}
                      alt={`Zdjęcie przedstawiające projekt ${product.title}`}
                    />
                  </a>
                </Link>
              ))}
            </OtherList>
            <Link href="/portfolio">
              <Button as="a" centered>
                Zobacz więcej
              </Button>
            </Link>
          </ContentWrapper>
        </OtherPostsSection>
      </Layout>
    </>
  );
};

const getPostFromMarkdown = async (
  slug: string,
  options?: { basicData?: boolean }
) => {
  const rawMdFile = await import(`../../content/${slug}.md`);
  const images = getFileNames(`./public/content/${slug}`, { withExt: true });
  const { content, data } = matter(rawMdFile.default);

  if (options && options.basicData) {
    return {
      title: data.title,
      image: images[0],
      slug: data.slug,
    };
  }

  return {
    content,
    data,
    images,
  };
};

export const getOtherPosts = async (options?: {
  exclude?: string;
  amount?: number;
  slugs?: string[];
}) => {
  let availableSlugs = getFileNames("./content");
  const amount = options?.amount ?? availableSlugs.length;
  let selectedSlugs = [];

  if (options?.exclude) {
    availableSlugs = availableSlugs.filter((slug) => slug !== options.exclude);
  }

  if (options?.slugs) {
    selectedSlugs = availableSlugs.filter((slug) =>
      options.slugs.includes(slug)
    );
  } else {
    for (let i = 0; i < amount; i++) {
      const random = Math.floor(Math.random() * availableSlugs.length);
      selectedSlugs.push(availableSlugs[random]);
      availableSlugs.splice(random, 1);
    }
  }

  return Promise.all(
    selectedSlugs.map((post) => getPostFromMarkdown(post, { basicData: true }))
  );
};

export async function getStaticPaths() {
  const files = getFileNames("./content");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(ctx) {
  const { slug } = ctx.params;

  const otherPosts = await getOtherPosts({ exclude: slug, amount: 3 });
  const post = await getPostFromMarkdown(slug);

  return {
    props: {
      markdown: { ...post },
      otherPosts,
    },
  };
}

export default PortfolioDetails;

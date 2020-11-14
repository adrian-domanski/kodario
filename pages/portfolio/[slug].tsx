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

const TechList = styled.ul``;

const TechListItem = styled.li``;

const OtherList = styled.div``;

const OtherListItem = styled.img``;

const InformationSection = styled(Section)`
  position: relative;

  ${Title} {
    text-align: left;
    margin-bottom: 2rem;
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
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <>
      <SEO />
      <Layout>
        <Header
          title={markdown.data.title}
          img={{
            src: `/content/${markdown.data.slug}/${markdown.data.slug}-1.jpg`,
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
            <Title subTitle>Krótki opis projektu</Title>
            <Paragraph blueColor>{markdown.content}</Paragraph>
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
        <Section footerSpace>
          <Title>Zobacz również</Title>
          <OtherList>
            {otherProducts.map((product, index) => (
              <OtherListItem
                key={index}
                src={`/content/${product.slug}/${product.image}`}
                alt={`Zdjęcie przedstawiające projekt ${product.title}`}
              />
            ))}
          </OtherList>
        </Section>
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

const getOtherPosts = async (options?: { exclude?: string }) => {
  let availableSlugs = getFileNames("./content");
  const randomSlugs = [];

  if (options && options.exclude) {
    availableSlugs = availableSlugs.filter((slug) => slug !== options.exclude);
  }

  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * availableSlugs.length);
    randomSlugs.push(availableSlugs[random]);
    availableSlugs.splice(random, 1);
  }

  return Promise.all(
    randomSlugs.map((post) => getPostFromMarkdown(post, { basicData: true }))
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

  const otherPosts = await getOtherPosts({ exclude: slug });
  const post = await getPostFromMarkdown(slug);

  return {
    props: {
      markdown: { ...post },
      otherPosts,
    },
  };
}

export default PortfolioDetails;

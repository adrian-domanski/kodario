import matter from 'gray-matter';
import { NextPage } from 'next';
import React from 'react';
import Header from '../../components/home/Header';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO';
import ContentWrapper from '../../styles/components/ContentWrapper';
import { Paragraph } from '../../styles/components/Paragraph';
import Section from '../../styles/components/Section';
import Title from '../../styles/components/Title';
import { getFileNames } from '../../utils/helpers';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import SideText from '../../styles/components/SideText';
import Button from '../../styles/components/Button';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

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
      <SEO
        title={`${markdown.data.title} - case study | Kodario`}
        description={`Discover more about ${markdown.data.title} project. Learn about the solution and technologies used. Visit the website and see for yourself how I create modern websites and web applications.`}
      />
      <Layout>
        <Header
          title={markdown.data.title}
          img={{
            src: `/content/${markdown.data.slug}/${markdown.images[0]}`,
            alt: `Picture showcasing my project - ${markdown.data.title}`,
          }}
          paragraph={{
            isBlue: true,
            value: 'Learn more about this project.',
          }}
          button={{
            href: markdown.data.pageLive || markdown.data.pageCode,
            value: markdown.data.pageLive ? 'Visit website' : 'Show code',
            externalPage: true,
          }}
          scrollToId='project-start'
        />
        <InformationSection id='project-start'>
          <ContentWrapper>
            <SideText side='LEFT' text='CASE STUDY' />
            <Title>About this project</Title>
            <GalleryWrapper>
              <ImageGallery items={images} />
            </GalleryWrapper>
            <Title subTitle className='subtitle'>
              Description:
            </Title>
            <Paragraph>
              <ReactMarkdown>{markdown.content}</ReactMarkdown>
            </Paragraph>
            <ButtonsWrapper>
              {markdown.data.pageLive && (
                <Button as='a' href={markdown.data.pageLive} target='_blank'>
                  Visit website
                </Button>
              )}
              {markdown.data.pageCode && (
                <Button as='a' href={markdown.data.pageCode} target='_blank'>
                  Show code
                </Button>
              )}
            </ButtonsWrapper>
          </ContentWrapper>
        </InformationSection>
        <Section darker>
          <ContentWrapper>
            <Title>Features</Title>
            <TechList centered={markdown.data?.techCenter}>
              {markdown.data.tech.map((item, index) => (
                <TechListItem key={index}>{item}</TechListItem>
              ))}
            </TechList>
          </ContentWrapper>
        </Section>
        <OtherPostsSection footerSpace>
          <ContentWrapper maxWidth={1100}>
            <Title>Other projects</Title>
            <OtherList>
              {otherProducts.map((product, index) => (
                <Link
                  key={index}
                  href='/portfolio/[slug]'
                  as={`/portfolio/${product.slug}`}
                >
                  <a className='link'>
                    <OtherListItem
                      src={`/content/${product.slug}/${product.image}`}
                      alt={`Photo showing project ${product.title}`}
                    />
                  </a>
                </Link>
              ))}
            </OtherList>
            <Link href='/portfolio'>
              <Button as='a' centered>
                Show more
              </Button>
            </Link>
          </ContentWrapper>
        </OtherPostsSection>
      </Layout>
    </>
  );
};

// Get dynamic data

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
      date: data.date,
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
  order?: 'random' | 'date:desc';
}) => {
  let availableSlugs = getFileNames('./content');
  const amount = options?.amount ?? availableSlugs.length;
  let selectedSlugs = [];

  if (options?.exclude) {
    availableSlugs = availableSlugs.filter((slug) => slug !== options.exclude);
  }

  if (options?.slugs) {
    selectedSlugs = options.slugs.map((slug) =>
      availableSlugs.find((availableSlug) => availableSlug === slug)
    );
  } else {
    for (let i = 0; i < amount; i++) {
      const random = Math.floor(Math.random() * availableSlugs.length);
      selectedSlugs.push(availableSlugs[random]);
      availableSlugs.splice(random, 1);
    }
  }

  let result = await Promise.all(
    selectedSlugs.map((post) => getPostFromMarkdown(post, { basicData: true }))
  );

  if (options?.order === 'date:desc') {
    result = result.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }

  return result;
};

export async function getStaticPaths() {
  const files = getFileNames('./content');

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

// Styles

const TechList = styled.ul<{ centered?: boolean }>`
  display: grid;
  line-height: 2;
  justify-content: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: ${(props) => (props.centered ? '1fr' : '1fr 1fr')};
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: ${(props) =>
      props.centered ? '1fr' : '1fr 1fr 1fr'};
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
    content: '\f105';
    font-family: 'Font Awesome 5 Free';
    font-weight: bold;
    padding-right: 8px;
  }
`;

const OtherList = styled.div`
  display: grid;
  width: 100%;
  row-gap: 1rem;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0;
  }
`;
export const ButtonsWrapper = styled.div`
  a {
    width: 100%;
    text-align: center;
    display: block;
  }
  a:nth-child(2) {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    a {
      width: auto;
    }

    a:nth-child(2) {
      margin-top: 2rem;
      margin-left: 1rem;
    }
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
    height: 100%;
    display: block;

    @media screen and (max-width: 997px) {
      max-width: 500px;
    }

    :hover {
      transform: scale(1);
    }

    display: block;
    width: 100%;
    cursor: pointer;
  }
`;

const OtherListItem = styled.img`
  display: block;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  object-fit: cover;

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

  .image-gallery-image {
    border-radius: 5px;
  }
`;

export default PortfolioDetails;

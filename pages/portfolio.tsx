import Header from '../components/home/Header';
import Layout from '../components/Layout/Layout';
import Section from '../styles/components/Section';
import Title from '../styles/components/Title';
import styled from 'styled-components';
import ContentWrapper from '../styles/components/ContentWrapper';
import Link from 'next/link';
import { getOtherPosts } from './portfolio/[slug]';
import PortfolioSVG from '../components/svg-animations/PortfolioSVG';
import SEO from '../components/SEO';

interface IProps {
  portfolioList: [any];
}

const PortfolioPage: React.FC<IProps> = ({ portfolioList }) => {
  return (
    <>
      <SEO pageTitle='Portfolio - our projects' />
      <Layout>
        <Header
          title='Portfolio'
          svg={{
            component: <PortfolioSVG />,
          }}
          paragraph={{
            isBlue: true,
            value: 'Take a look at our previous work.',
          }}
          button={{
            href: '/contact',
            value: 'Contact us',
          }}
          scrollToId='portfolio-start'
        />
        <Section footerSpace id='portfolio-start'>
          <CustomContentWrapper>
            <Title>Realizations</Title>
            <PortfolioGrid>
              {portfolioList.map((product, index) => (
                <PortfolioGridItem key={index}>
                  <Link
                    href='/portfolio/[slug]'
                    as={`/portfolio/${product.slug}`}
                  >
                    <a>
                      <PortfolioImage
                        className='lazy'
                        src='/img/lazy-load.jpg'
                        data-src={`/content/${product.slug}/${product.image}`}
                        alt={`Showing project ${product.title} on a mobile device.`}
                      />
                    </a>
                  </Link>
                </PortfolioGridItem>
              ))}
            </PortfolioGrid>
          </CustomContentWrapper>
        </Section>
      </Layout>
    </>
  );
};

// Get dynamic data

export async function getStaticProps() {
  const portfolioList = await getOtherPosts({ order: 'date:desc' });

  return {
    props: {
      portfolioList,
    },
  };
}

// Styles

export const PortfolioImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

const CustomContentWrapper = styled(ContentWrapper)`
  max-width: 1100px;
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const PortfolioGridItem = styled.div`
  border-radius: 5px;
  overflow: hidden;

  a {
    outline-offset: -3px;
  }

  img {
    transition: transform 0.2s ease-in;
  }

  :hover {
    img {
      transform: scale(1.03);
    }
  }
`;

export default PortfolioPage;

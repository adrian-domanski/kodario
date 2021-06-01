import ContactForm from '../components/ContactForm';
import HomeSVG from '../components/svg-animations/HomeSVG';
import Header from '../components/home/Header';
import OurWork from '../components/home/OurWork';
import WhatWeDo from '../components/home/WhatWeDo';
import Layout from '../components/Layout/Layout';
import Parallax from '../components/Parallax';
import SEO from '../components/SEO';
import Section from '../styles/components/Section';
import { getOtherPosts } from './portfolio/[slug]';

interface IProps {
  portfolioList: [any];
}

export default function Hom({ portfolioList }: IProps) {
  return (
    <>
      <SEO />
      <Layout>
        <Header
          title='Tworzymy nowoczesne strony internetowe'
          svg={{
            component: <HomeSVG />,
          }}
          showList
          button={{
            value: 'Portfolio',
            href: '/portfolio',
          }}
          scrollToId='home-start'
        />
        <WhatWeDo />
        <OurWork portfolioList={portfolioList} />
        <Parallax />
        <Section footerSpace>
          <ContactForm showImage />
        </Section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const portfolioList = await getOtherPosts({
    amount: 4,
    slugs: [
      'martmeble',
      'stomatolog',
      'estock',
      'blog-o-podrozach',
      'portfolio',
      'twwworzenie',
    ],
  });

  return {
    props: {
      portfolioList,
    },
  };
}

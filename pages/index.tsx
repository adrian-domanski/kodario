import ContactForm from "../components/ContactForm";
import Header from "../components/home/Header";
import OurWork from "../components/home/OurWork";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import SEO from "../components/SEO";
import Section from "../styles/components/Section";
import { getOtherPosts } from "./portfolio/[slug]";

interface IProps {
  portfolioList: [any];
}

export default function Hom({ portfolioList }: IProps) {
  return (
    <>
      <SEO />
      <Layout>
        <Header
          title="Innowacyjne rozwiązania w nowoczesnym stylu"
          img={{
            src: "/img/header/home.svg",
            alt: "Strona internetowa na urządzeniu mobilnym",
          }}
          showList
          button={{
            value: "Portfolio",
            href: "/portfolio",
          }}
          scrollToId="home-start"
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
    slugs: ["portfolio", "twwworzenie", "psd-to-html", "plan-szkolny"],
  });

  return {
    props: {
      portfolioList,
    },
  };
}

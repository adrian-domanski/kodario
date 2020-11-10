import ContactForm from "../components/ContactForm";
import Header from "../components/home/Header";
import OurWork from "../components/home/OurWork";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import SEO from "../components/SEO";
import Section from "../styles/components/Section";
import SideText from "../styles/components/SideText";

export default function Home() {
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
        <OurWork />
        <Parallax />
        <Section footerSpace>
          <SideText text="KONTAKT" side="LEFT" minWidthDisplay={1850} />
          <ContactForm showImage />
        </Section>
      </Layout>
    </>
  );
}

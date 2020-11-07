import ContactForm from "../components/ContactForm";
import Header from "../components/home/Header";
import OurWork from "../components/home/OurWork";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";
import Section from "../styles/components/Section";

export default function Home() {
  return (
    <Layout>
      <Header
        title="Innowacyjne rozwiązania w nowoczesnym stylu"
        img={{
          src: "/img/header/home.svg",
          alt: "Strona internetowa na urządzeniu mobilnym",
        }}
        button={{
          value: "Portfolio",
          href: "/portfolio",
        }}
      />
      <WhatWeDo />
      <OurWork />
      <Parallax />
      <Section footerSpace>
        <ContactForm />
      </Section>
    </Layout>
  );
}

import ContactForm from "../components/ContactForm";
import Header from "../components/home/Header";
import OurWork from "../components/home/OurWork";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";
import Parallax from "../components/Parallax";

export default function Home() {
  return (
    <Layout>
      <Header />
      <WhatWeDo />
      <OurWork />
      <Hello />
      <ContactForm />
    </Layout>
  );
}

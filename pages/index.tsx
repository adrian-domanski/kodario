import Header from "../components/home/Header";
import OurWork from "../components/home/OurWork";
import WhatWeDo from "../components/home/WhatWeDo";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Header />
      <WhatWeDo />
      <OurWork />
    </Layout>
  );
}

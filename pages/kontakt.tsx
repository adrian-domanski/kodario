import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";

const ContactPage = () => {
  return (
    <Layout>
      <Header
        title="Kontakt"
        paragraph={{ value: "Masz pomysł na nowy projekt", isBlue: true }}
        img={{
          src: "/img/header/contact.svg",
          alt: "Skontaktuj się z nami",
        }}
        button={{
          href: "https://www.facebook.com/kodariopl/",
          value: "Zadaj pytanie na Facebooku",
          externalPage: true,
        }}
      />
    </Layout>
  );
};

export default ContactPage;

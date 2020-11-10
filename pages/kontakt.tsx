import ContactForm from "../components/ContactForm";
import Header from "../components/home/Header";
import Layout from "../components/Layout/Layout";
import { Paragraph } from "../styles/components/Paragraph";
import Section from "../styles/components/Section";
import Title from "../styles/components/Title";
import ContactWrapper from "../styles/components/ContentWrapper";
import styled from "styled-components";

const TeamWorkSection = styled(Section)`
  ${Paragraph} {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
    font-size: 1.2rem;
    margin-top: -1rem;
  }
`;

const ContactPage = () => {
  return (
    <Layout>
      <Header
        title="Kontakt"
        paragraph={{ value: "Masz pomysł na nowy projekt?", isBlue: true }}
        img={{
          src: "/img/header/contact.svg",
          alt: "Skontaktuj się z nami",
        }}
        button={{
          href: "https://www.facebook.com/kodariopl/",
          value: "Zadaj pytanie na Facebooku",
          externalPage: true,
        }}
        scrollToId="contact-start"
      />
      <TeamWorkSection darker id="contact-start">
        <ContactWrapper>
          <Title>Jesteś zainteresowany współpracą?</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sed distinctio, dolorem impedit natus tenetur omnis vel rerum quasi.
          </Paragraph>
        </ContactWrapper>
      </TeamWorkSection>
      <Section footerSpace>
        <ContactForm contactInformation />
      </Section>
    </Layout>
  );
};

export default ContactPage;

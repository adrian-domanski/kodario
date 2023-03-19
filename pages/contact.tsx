import ContactForm from '../components/ContactForm';
import Header from '../components/home/Header';
import Layout from '../components/Layout/Layout';
import { Paragraph } from '../styles/components/Paragraph';
import Section from '../styles/components/Section';
import Title from '../styles/components/Title';
import ContactWrapper from '../styles/components/ContentWrapper';
import styled from 'styled-components';
import ContactSVG from '../components/svg-animations/ContactSVG';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO
        pageTitle='Contact'
        description="Get in touch with us and let us help you bring your ideas to life. Whether you're looking to create a new project, need advice, or want to grow your business, we're here to support you every step of the way. Contact us today for comprehensive solutions tailored to your needs."
      />
      <Layout>
        <Header
          title='How can we help you?'
          paragraph={{ value: "Let's chat about your project.", isBlue: true }}
          svg={{
            component: <ContactSVG />,
          }}
          button={{
            href: '/contact/#contact-form',
            value: "Let's talk",
          }}
          scrollToId='contact-start'
        />
        <TeamWorkSection darker id='contact-start'>
          <ContactWrapper>
            <Title>Interested in working together?</Title>
            <Paragraph>
              Do you have a new project idea, need advice, or are unsure how to
              develop your business? Use the methods below to{' '}
              <b>get in touch with us</b>, and we'll take care of the rest!
            </Paragraph>
          </ContactWrapper>
        </TeamWorkSection>
        <Section footerSpace>
          <ContactForm contactInformation />
        </Section>
      </Layout>
    </>
  );
};

// Styles

const TeamWorkSection = styled(Section)`
  ${Paragraph} {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-weight: 500;
    margin-top: -1rem;
  }
`;

export default ContactPage;

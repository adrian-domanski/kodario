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
        pageTitle='Kontakt'
        description='Jesteś zainteresowany współpracą? Skorzystaj z jednej z metod i skontaktuj się ze mną, a ja zadbam o całą resztę!'
      />
      <Layout>
        <Header
          title='Kontakt'
          paragraph={{ value: 'Masz pomysł na nowy projekt?', isBlue: true }}
          svg={{
            component: <ContactSVG />,
          }}
          button={{
            href: 'https://www.facebook.com/kodariopl/',
            value: 'Szybkie pytanie na Facebooku',
            externalPage: true,
          }}
          scrollToId='contact-start'
        />
        <TeamWorkSection darker id='contact-start'>
          <ContactWrapper>
            <Title>Jesteś zainteresowany współpracą?</Title>
            <Paragraph>
              Masz pomysł na nowy projekt, potrzebujesz rady, lub sam nie wiesz
              co pomogło by w rozwoju Twojej działalności? Skorzystaj z
              poniższych metod i <b>skontaktuj się ze mną</b>, a ja zadbam o
              całą resztę!
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

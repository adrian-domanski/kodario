import Header from '../components/home/Header';
import Layout from '../components/Layout/Layout';
import Section from '../styles/components/Section';
import styled from 'styled-components';
import Title from '../styles/components/Title';
import { Paragraph } from '../styles/components/Paragraph';
import Button from '../styles/components/Button';
import ContentWrapper from '../styles/components/ContentWrapper';
import AboutMe from '../components/svg-animations/AboutMeSVG';
import SEO from '../components/SEO';
import Link from 'next/dist/client/link';

const AboutMePage = () => {
  return (
    <>
      <SEO
        pageTitle='About us'
        description='Looking for professional web development and graphic design services? Learn more about our expertise and experience in creating stunning websites and visual assets that help businesses succeed. Discover how we can help you achieve your online goals.'
      />
      <Layout>
        <Header
          svg={{ component: <AboutMe /> }}
          title='About Us'
          paragraph={{
            value: 'Learn about our mission and values.',
            isBlue: true,
          }}
          button={{
            href: '/contact',
            value: 'Let’s talk',
          }}
          scrollToId='about-me-start'
        />
        <AboutMeSection id='about-me-start'>
          <ContentWrapper>
            <Title>Few words about me</Title>
            <div className='content-flex'>
              <img src='/img/me.png' alt='Adrian Domański, web developer' />
              <div className='content-right'>
                <Paragraph>
                  My name is <b>Adrian Domański</b> and I live near Poznań,
                  Poland. I have been working in web development for over{' '}
                  {new Date().getFullYear() - 2019} years, combining my passion
                  for coding with my eye for design to create modern and
                  functional <b>websites</b> and <b>applications</b>. I strive
                  to stay up-to-date with the latest technologies and trends in
                  order to deliver the best possible results for my clients.
                </Paragraph>
                <Link href='/contact'>
                  <Button as='a'>Contact me</Button>
                </Link>
              </div>
            </div>
          </ContentWrapper>
        </AboutMeSection>
        <TrustMeSection footerSpace darker>
          <ContentWrapper>
            <Title>Why Choose Us?</Title>
            <TrustMeGrid>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-tasks' />
                </div>
                <p>Complete our tasks on time</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-hands-helping' />
                </div>
                <p>Care about good opinions of our customers</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-headset' />
                </div>
                <p>Offer technical support</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-laptop-code' />
                </div>
                <p>Possess practical experience</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-cubes' />
                </div>
                <p>Offer a comprehensive range of services</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-dollar-sign' />
                </div>
                <p>Offer products at a reasonable price</p>
              </TrustMeGridItem>
            </TrustMeGrid>
          </ContentWrapper>
        </TrustMeSection>
      </Layout>
    </>
  );
};

// Styles

const TrustMeGrid = styled.div`
  display: grid;

  @media screen and (min-width: 768px) and (max-width: 997px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 1rem;
    max-width: 700px;
    margin: 0 auto;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2rem;
  }
`;

const TrustMeGridItem = styled.div`
  text-align: center;
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px -8px #808080;

  @media screen and (min-width: 998px) {
    padding: 3.5rem 2rem 3rem;
  }

  :not(:last-child) {
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
    }
  }

  .icon {
    display: block;
    position: relative;
    width: 100px;
    margin: 0 auto;

    :before {
      content: '';
      background: url('/img/blob.svg') no-repeat;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 90px;
      height: 74px;
      background-size: cover;
      z-index: 2;
    }
  }

  i {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    position: relative;
    z-index: 3;
  }

  p {
    margin-top: 1.5rem;
    font-weight: 500;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.darkerBlue};

    @media screen and (min-width: 998px) {
      margin-top: 2rem;
    }
  }
`;

const AboutMeSection = styled(Section)`
  img {
    display: block;
    width: 85%;
    max-width: 300px;
    margin: 0 auto;

    @media screen and (min-width: 998px) {
      padding-right: 2rem;
    }
  }

  ${Paragraph} {
    text-align: center;
    margin-top: 1.5rem;

    @media screen and (min-width: 998px) {
      text-align: left;
    }
  }

  ${ContentWrapper} {
    max-width: 1000px;
  }

  ${Button} {
    margin: 1.5rem auto 0;

    @media screen and (min-width: 998px) {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 998px) {
    .content-flex {
      display: flex;
      align-items: center;
    }
  }
`;

const TrustMeSection = styled(Section)`
  ${ContentWrapper} {
    max-width: 1000px;
  }
`;

export default AboutMePage;

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

const AboutMePage = () => {
  return (
    <>
      <SEO
        pageTitle='O mnie - dowiedz się więcej'
        description='Dowiedz się więcej o mnie, oraz dlaczego warto mi zaufać. Tworzę strony internetowe od kilku lat i posiadam bogate doświadczenie.'
      />
      <Layout>
        <Header
          svg={{ component: <AboutMe /> }}
          title='O mnie'
          paragraph={{
            value: 'Dowiedz się więcej o mojej osobie',
            isBlue: true,
          }}
          button={{
            href: 'https://adrian-domanski.pl',
            value: 'Moja strona',
            externalPage: true,
          }}
          scrollToId='about-me-start'
        />
        <AboutMeSection id='about-me-start'>
          <ContentWrapper>
            <Title>Kilka słów o mnie</Title>
            <div className='content-flex'>
              <img
                src='/img/me.png'
                alt='Adrian Domański, twórca stron internetowych'
              />
              <div className='content-right'>
                <Paragraph>
                  Nazywam się <b>Adrian Domański</b> i mieszkam pod Poznaniem.
                  Tworzeniem stron i aplikacji internetowych zajmuję się od{' '}
                  {new Date().getFullYear() - 2018} lat. Łączę swoją pasję do
                  programowania z grafiką i staram się tworzyć nowoczesne
                  produkty, które spełniają swoje zadanie w sieci.
                </Paragraph>
                <Button
                  as='a'
                  href='https://adrian-domanski.pl'
                  target='_blank'
                  rel='noopener'
                >
                  Dowiedz się więcej
                </Button>
              </div>
            </div>
          </ContentWrapper>
        </AboutMeSection>
        <TrustMeSection footerSpace darker>
          <ContentWrapper>
            <Title>Dlaczego warto mi zaufać?</Title>
            <TrustMeGrid>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-tasks' />
                </div>
                <p>Odpowiedznialnie wykonuje swoje zadania</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-hands-helping' />
                </div>
                <p>Dbam o dobrą opinię swoich klientów</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-headset' />
                </div>
                <p>Oferuje wsparcie techniczne</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-laptop-code' />
                </div>
                <p>Posiadam praktyczne doświadczenie</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-cubes' />
                </div>
                <p>Oferuje kompleksowy zakres usług</p>
              </TrustMeGridItem>
              <TrustMeGridItem>
                <div className='icon'>
                  <i className='fas fa-dollar-sign' />
                </div>
                <p>Oferuje produkty w przystępnej cenie</p>
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

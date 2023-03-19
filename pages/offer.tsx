import Header from '../components/home/Header';
import { WhatWeDoItem } from '../components/home/WhatWeDo';
import { WhatWeDoSection } from '../components/home/WhatWeDo';
import Layout from '../components/Layout/Layout';
import Section from '../styles/components/Section';
import Title from '../styles/components/Title';
import styled from 'styled-components';
import { Paragraph } from '../styles/components/Paragraph';
import Button from '../styles/components/Button';
import SideText from '../styles/components/SideText';
import ContentWrapper from '../styles/components/ContentWrapper';
import Link from 'next/link';
import OfferSVG from '../components/svg-animations/OfferSVG';
import SEO from '../components/SEO';
import CodeSVG from '../components/svg-animations/offer/CodeSVG';
import DesignSVG from '../components/svg-animations/offer/DesignSVG';
import SocialsSVG from '../components/svg-animations/offer/SocialsSVG';
import SupportSVG from '../components/svg-animations/offer/SupportSVG';
import ComplexSVG from '../components/svg-animations/offer/ComplexSVG';

const GoToContact = styled(Section)`
  ${Button} {
    margin-top: 1.5rem;

    @media screen and (min-width: 998px) {
      margin-top: 2rem;
    }
  }

  ${Paragraph} {
    margin-top: -1rem;
  }
`;

const OfferPage: React.FC = () => {
  return (
    <>
      <SEO
        pageTitle='Offer'
        description='Discover the scope of our services. We offer website design, graphic design, logo design, and technical support services. We provide a broad range of services, enabling you to entrust your entire project to us. Whether you require a simple website or a complex web application, we have the skills and expertise to bring your vision to life. Contact us today to learn more about our services and how we can help you achieve your online goals.'
      />
      <Layout>
        <Header
          title='Our offer'
          svg={{
            component: <OfferSVG />,
            maxWidth: '70%',
          }}
          button={{
            href: '/contact',
            value: 'Contact us',
          }}
          paragraph={{
            value: 'Discover the full scope of our services.',
            isBlue: true,
          }}
          scrollToId='offer-start'
        />
        <WhatWeDoSection id='offer-start'>
          <ContentWrapper>
            <SideText text='Oferta' side='LEFT' />
            <Title>Discover our offer</Title>
            <WhatWeDoItem number='1'>
              <CodeSVG />
              <div className='content'>
                <Title subTitle>Modern Web Application</Title>
                <Paragraph>
                  By focusing on the latest trends and emerging technologies, we
                  are able to create web applications that are not only{' '}
                  <b>visually appealing</b> but also highly functional and{' '}
                  <b>scalable</b>.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='2'>
              <DesignSVG />
              <div className='content'>
                <Title subTitle>Graphic Design</Title>
                <Paragraph>
                  Our <b>graphic design</b> expertise allows us to create
                  visually appealing designs that effectively communicate your
                  message. With a focus on <b>branding</b> and{' '}
                  <b>digital graphics</b>, we deliver exceptional designs
                  tailored to your specific needs.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='3'>
              <SocialsSVG />
              <div className='content'>
                <Title subTitle>Brand Growth</Title>
                <Paragraph>
                  We offer a range of services to help businesses succeed, from
                  developing a strong <b>brand identity</b> to executing
                  effective <b>digital marketing campaigns</b>. With our
                  expertise and tools, we're committed to helping our clients
                  achieve their goals and stand out in today's competitive
                  market.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='4'>
              <SupportSVG />
              <div className='content'>
                <Title subTitle>Technical Support</Title>
                <Paragraph>
                  We know that launching a website is just the beginning, which
                  is why our <b>technical support</b> services provide ongoing
                  assistance to ensure your website and business run smoothly,
                  minimizing downtime and <b>maximizing performance</b>.
                </Paragraph>
              </div>
            </WhatWeDoItem>
            <WhatWeDoItem number='5'>
              <ComplexSVG />
              <div className='content'>
                <Title subTitle>Complete Package</Title>
                <Paragraph>
                  Our <b>comprehensive range</b> of services means you can trust
                  us with your entire project, from <b>graphic design</b> to{' '}
                  <b>programming</b> and <b>SEO</b>. Let us take care of
                  everything so you can focus on growing your business.
                </Paragraph>
              </div>
            </WhatWeDoItem>
          </ContentWrapper>
        </WhatWeDoSection>
        <GoToContact darker footerSpace>
          <ContentWrapper>
            <Title>Have Questions? Let Us Help.</Title>
            <Paragraph blueColor fontWeight='500' isCentered>
              We're happy to answer any questions and clear up any doubts you
              may have. If you're unsure about what you need, feel free to get
              in touch with us!
            </Paragraph>
            <Link href='/contact'>
              <Button centered as='a'>
                Contact Us
              </Button>
            </Link>
          </ContentWrapper>
        </GoToContact>
      </Layout>
    </>
  );
};

export default OfferPage;

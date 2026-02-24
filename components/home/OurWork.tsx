import React from 'react';
import Section from '../../styles/components/Section';
import Title from '../../styles/components/Title';
import styled from 'styled-components';
import Button from '../../styles/components/Button';
import ContentWrapper from '../../styles/components/ContentWrapper';
import SideText from '../../styles/components/SideText';
import Link from 'next/link';

const CustomSection = styled(Section)`
  position: relative;

  ${Button} {
    margin-top: 2rem;
  }
`;

export const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;

  @media screen and (min-width: 600px) {
    gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const CustomPortfolioGrid = styled(PortfolioGrid)`
  @media screen and (min-width: 998px) {
    grid-template-columns: 1fr 1fr;
  }
`;

interface IProps {
  portfolioList: [any];
}

const OurWork: React.FC<IProps> = ({ portfolioList }) => {
  return (
    <CustomSection darker id='recent-work'>
      <ContentWrapper>
        <SideText side='RIGHT' text='portfolio' />
        <Title>Recent work</Title>
        <CustomPortfolioGrid>
          {portfolioList.map((product, index) => (
            <PortfolioGridItem key={index}>
              <Link href='/portfolio/[slug]' as={`/portfolio/${product.slug}`}>
                <a>
                  <PortfolioImage
                    className='lazy'
                    src='/img/lazy-load.jpg'
                    data-src={`/content/${product.slug}/${product.image}`}
                    alt={`Project ${product.title} showed on real device.`}
                  />
                </a>
              </Link>
            </PortfolioGridItem>
          ))}
        </CustomPortfolioGrid>
        {/* <Link href='/portfolio'>
          <Button centered as='a'>
            Show more
          </Button>
        </Link> */}
      </ContentWrapper>
    </CustomSection>
  );
};

export const PortfolioImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  :last-child {
    margin-bottom: 0;
  }
`;

export const PortfolioGridItem = styled.div`
  border-radius: 5px;
  overflow: hidden;

  a {
    outline-offset: -3px;
  }

  img {
    transition: transform 0.2s ease-in;
  }

  :hover {
    img {
      transform: scale(1.03);
    }
  }
`;

export default OurWork;

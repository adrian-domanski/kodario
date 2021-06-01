import styled from 'styled-components';

interface IProps {
  subTitle?: boolean;
  isWhite?: boolean;
}

const Title = styled.h2<IProps>`
  color: ${({ theme, isWhite }) =>
    isWhite ? theme.colors.lightWhite : theme.colors.darkBlue};
  font-size: ${(props) => (props.subTitle ? '1.5rem' : '1.8rem')};
  font-weight: ${(props) => (props.subTitle ? 500 : 700)};
  position: relative;
  text-align: center;
  z-index: 1;
  display: ${(props) => (props.subTitle ? 'block' : 'table')};
  margin: 0 auto 3rem auto;
  letter-spacing: 1px;
  line-height: 1.5;

  ${({ subTitle: subTitle }) =>
    !subTitle &&
    `
  :before {
    content: "";
    display: inline-block;
    position: relative;
    z-index: -1;
    background: url("/img/title-accent.svg") no-repeat;
    background-size: 100%;
    margin-right: -50px;
    top: 12px;
    left: -26px;
    width: 50px;
    height: 50px;
  }
  `}

  @media screen and (min-width: 768px) {
    margin: 0 auto 3.5rem auto;
    font-size: ${(props) => (props.subTitle ? '1.4rem' : '1.7rem')};
  }

  @media screen and (min-width: 998px) {
    margin: 0 auto 4rem auto;
    font-size: ${(props) => (props.subTitle ? '1.6rem' : '2.2rem')};

    :before {
      width: 65px;
      height: 65px;
      top: 18px;
      left: -14px;
    }
  }
`;

export default Title;

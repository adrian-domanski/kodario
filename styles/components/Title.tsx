import styled from "styled-components";

interface IProps {
  subTitle?: boolean;
  isWhite?: boolean;
}

export default styled.h2<IProps>`
  color: ${({ theme, isWhite }) =>
    isWhite ? theme.colors.lightWhite : theme.colors.darkBlue};
  font-size: ${(props) => (props.subTitle ? "1.5rem" : "1.3rem")};
  font-weight: ${(props) => (props.subTitle ? 500 : 700)};
  position: relative;
  text-align: center;
  z-index: 1;
  display: ${(props) => (props.subTitle ? "block" : "table")};
  margin: 0 auto 2rem auto;

  ${({ subTitle }) =>
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
    top: 15px;
    left: -26px;
    width: 50px;
    height: 50px;
  }
  `}
`;

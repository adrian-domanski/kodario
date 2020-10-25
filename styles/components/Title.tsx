import styled from "styled-components";

interface IProps {
  subTitle?: boolean;
}

export default styled.h2<IProps>`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${(props) => (props.subTitle ? "1.5rem" : "1.3rem")};
  font-weight: ${(props) => (props.subTitle ? 500 : 700)};
  position: relative;
  display: ${(props) => (props.subTitle ? "block" : "table")};
  margin: 2rem auto;

  ${({ subTitle }) =>
    !subTitle &&
    `
  :before {
    content: "";
    display: block;
    position: absolute;
    top: -9px;
    left: -23px;
    background: url("/img/title-accent.svg") no-repeat;
    background-size: 100%;
    width: 50px;
    height: 50px;
  }
  `}
`;

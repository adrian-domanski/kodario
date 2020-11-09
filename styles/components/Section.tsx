import styled from "styled-components";

interface IProps {
  className?: string;
  darker?: boolean;
  footerSpace?: boolean;
}

export default styled.section.attrs(({ className }: IProps) => ({
  className: `section ${className}`,
}))<IProps>`
  background-color: ${({ darker, theme }) =>
    darker ? theme.colors.darkerSection : theme.colors.lightWhite};
  padding: 3rem 2rem 4rem;
  display: block;
  width: 100%;

  @media screen and (min-width: 600px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media screen and (min-width: 998px) {
    padding: 5rem 2rem 6rem;
  }

  ${({ footerSpace }) =>
    footerSpace && "padding-bottom: calc(2rem + 11vw) !important;"}
`;

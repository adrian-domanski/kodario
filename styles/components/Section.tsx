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

  ${({ footerSpace }) => footerSpace && "padding-bottom: calc(2rem + 90px);"}
`;

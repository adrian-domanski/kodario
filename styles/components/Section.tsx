import styled from "styled-components";

interface IProps {
  className?: string;
  darker?: boolean;
}

export default styled.section.attrs(({ className }: IProps) => ({
  className: `section ${className}`,
}))<IProps>`
  background-color: ${({ darker, theme }) =>
    darker ? theme.colors.darkerSection : theme.colors.lightWhite};
  padding: 2rem;
`;

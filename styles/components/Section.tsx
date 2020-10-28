import styled from "styled-components";

interface IProps {
  className?: string;
  darker?: boolean;
}

export default styled.section.attrs(({ className }: IProps) => ({
  className: `section ${className}`,
}))<IProps>`
  ${({ darker }) => darker && "background: #ebebeb;"}
  padding: 2rem;
`;

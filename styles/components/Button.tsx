import styled from "styled-components";

interface IProps {
  centered?: boolean;
}

export default styled.button.attrs({ className: "button" })<IProps>`
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  border-radius: 100px;
  padding: 0.6rem 2rem;
  height: auto;
  display: block;

  ${({ centered }) => centered && "margin: 0 auto"}
`;

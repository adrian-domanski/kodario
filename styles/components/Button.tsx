import styled from "styled-components";

interface IProps {
  centered?: boolean;
}

export default styled.button.attrs({ className: "button" })<IProps>`
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  border-radius: 100px;
  padding: 0.7rem 2.5rem;
  font-size: 1rem;
  height: auto;
  display: block;
  border: none;

  ${({ centered }) => centered && "margin: 0 auto"}
`;

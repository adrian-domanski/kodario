import styled from "styled-components";

interface IProps {
  centered?: boolean;
  as?: string;
}

export default styled.button.attrs({ className: "button" })<IProps>`
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  border-radius: 100px;
  padding: 0.7rem 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 1rem;
  height: auto;
  display: ${({ as }) => (as ? "table" : "block")};
  border: none;
  transition: background-color 0.2s ease-in, transform 0.2s ease-in;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.darkBlue};
    transform: scale(1.05);
  }

  :active,
  :focus {
    /* box-shadow: 0 0 0 2px red; */
    /* outline: none; */
    background-color: ${({ theme }) => theme.colors.darkBlue};
  }

  ${({ centered }) => centered && "margin: 0 auto"};

  @media screen and (min-width: 700px) {
    font-size: 1.1rem;
  }
`;

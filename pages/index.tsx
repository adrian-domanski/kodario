import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const StyledHomeHeader = styled.header.attrs({ className: "section" })`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};

  h1 {
    font-weight: 700;
    font-size: 1.4rem;
  }

  img {
    margin: 2rem auto 0 auto;
    width: 90%;
    display: block;
  }

  .button {
    margin-top: 2rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
  }
`;

const StyledButton = styled.button.attrs({ className: "button" })`
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  border-radius: 100px;
  padding: 1rem 2rem;
`;

export default function Home() {
  return (
    <Layout>
      <StyledHomeHeader>
        <h1>
          Innowacyjne rozwiązania
          <br />w nowoczesnym stylu
        </h1>
        <img
          src="/img/phone-start.svg"
          alt="Strona internetowa na urządzeniu mobilnym"
        />
        <StyledButton>Portfolio</StyledButton>
      </StyledHomeHeader>
    </Layout>
  );
}

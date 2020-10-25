import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const StyledHomeHeader = styled.header`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  background: #fff;
  padding: 2rem 1rem 1.5rem;

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
    margin-top: 1.5rem;
    padding: 1.5rem 3rem;
    font-size: 1.2rem;
  }
`;

const StyledMain = styled.main`
  padding: 1.5rem 1rem;
`;

const StyledButton = styled.button.attrs({ className: "button" })`
  background-color: ${({ theme }) => theme.colors.darkerBlue};
  color: ${({ theme }) => theme.colors.lightWhite};
  border-radius: 100px;
  padding: 1rem 2rem;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1.5rem;
  font-weight: 700;
  position: relative;
  display: table;
  margin: 2rem auto;

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
      <StyledMain>
        <SectionTitle>Czym się zajmuję?</SectionTitle>
      </StyledMain>
    </Layout>
  );
}

import React from "react";
import styled from "styled-components";
import Button from "../../styles/components/Button";

const StyledHomeHeader = styled.header`
  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  background: #fff;
  padding: 2rem 1rem 1.5rem;

  h1 {
    font-weight: 700;
    font-size: 1.5rem;
  }

  button {
    margin-top: 1rem;
  }

  img {
    margin: 2rem auto 0 auto;
    width: 90%;
    display: block;
  }
`;

const Header = () => {
  return (
    <StyledHomeHeader>
      <h1>
        Innowacyjne rozwiązania
        <br />w nowoczesnym stylu
      </h1>
      <img
        src="/img/phone-start.svg"
        alt="Strona internetowa na urządzeniu mobilnym"
      />
      <Button centered>Portfolio</Button>
    </StyledHomeHeader>
  );
};

export default Header;

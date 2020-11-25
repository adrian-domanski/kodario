import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  ul {
    list-style-type: none;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    overflow-x: hidden;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  flex: 1;
`;

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />
        <StyledContent>{children}</StyledContent>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

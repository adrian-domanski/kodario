import React from "react";
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
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #F8F8F8;
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

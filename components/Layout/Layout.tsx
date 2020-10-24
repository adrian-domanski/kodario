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

  body {
      font-family: 'Montserrat', sans-serif;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledMain = styled.main`
  flex: 1;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />
        <StyledMain>{children}</StyledMain>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;

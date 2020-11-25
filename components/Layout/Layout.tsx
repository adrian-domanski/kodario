import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled, { createGlobalStyle } from "styled-components";

declare const window: any;
declare const unfocus: any;

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

  useEffect(() => {
    // Use outlines only with keyboard
    (function (document, window) {
      if (!document || !window) {
        return;
      }

      var styleText =
        "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";
      var unfocus_style = document.createElement("STYLE");

      window.unfocus = function () {
        document.getElementsByTagName("HEAD")[0].appendChild(unfocus_style);

        document.addEventListener("mousedown", function () {
          unfocus_style.innerHTML = styleText + "}";
        });
        document.addEventListener("keydown", function () {
          unfocus_style.innerHTML = "";
        });
      };

      unfocus.style = function (style) {
        styleText += style;
      };

      unfocus();
    })(document, window);
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

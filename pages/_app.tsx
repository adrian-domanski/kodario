import App from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta
            name="description"
            content="Zbiór najlepszych memów i śmiesznych obrazków. Twórz swoje własne memy korzystając z naszych szablonów, lub dodaj własne zdjęcia i dziel się nimi z innymi."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

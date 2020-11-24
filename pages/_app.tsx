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
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Kodario - Nowoczesne strony internetowe"
          />
          <meta
            property="og:description"
            content="Zajmuję się tworzeniem nowoczesnych stron oraz aplikacji internetowych. Chętnie zaprojektuję i zrealizuję stronę, która pomożę Ci w rozwoju twojej działalności."
          />
          <meta property="og:image" content="https://kodario.pl/og-image.jpg" />
          <meta property="og:url" content="https://kodario.pl" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

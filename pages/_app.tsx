import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Head from 'next/head';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta
            name='description'
            content='Are you interested in creating modern websites and web applications that will help grow your business? Trust my experience and knowledge to design and develop a website that meets your needs.'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap'
            rel='stylesheet'
          ></link>
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='Kodario - Modern Web Development Solutions'
          />
          <meta
            property='og:description'
            content='Are you interested in creating modern websites and web applications that will help grow your business? Trust my experience and knowledge to design and develop a website that meets your needs.'
          />
          <meta
            property='og:image'
            content='https://kodario.com/og-image.jpg'
          />
          <meta property='og:url' content='https://kodario.com' />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;

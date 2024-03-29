import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// import MessengerChat from '../components/MessengerChat';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pl'>
        <Head />
        <body>
          {/* <MessengerChat /> */}
          <Main />
          <script
            defer
            src='https://kit.fontawesome.com/67491f19fa.js'
            crossOrigin='anonymous'
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

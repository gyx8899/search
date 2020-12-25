import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/styles';
import {site, author} from '../site/config';

const {
  description, keywords, themeColor, gaTrackingId,
} = site.header;

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author.name} />
          <link rel="shortcut icon" href={require('../public/images/favicon.ico')} type="image/ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/images/favicon-96x96.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content={themeColor} />
          <meta name="msapplication-TileImage" content="/images/ms-icon-144x144.png'" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          {/* {<!-- Status Bar Style -->} */}
          {/* {<!-- Safari: black, black-translucent -->} */}
          <meta name="apple-mobile-web-app-status-bar-style" content="yes" />
          {/* {<!-- Chrome, Firefox OS and Opera -->} */}
          <meta name="theme-color" content={themeColor} />
          <link
              rel="stylesheet"
              type="text/css"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
          />
          <link href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" rel="stylesheet" />
          {
            gaTrackingId && <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
          }
        </Head>
        <body>
          <div id="page-transition" />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;

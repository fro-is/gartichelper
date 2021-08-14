import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta property="og:url" content="http://www.gartichelper.me" />
          <meta
            property="og:image"
            content="https://i.ibb.co/VBDzDYL/gartic-helper-og.png"
          />
          <meta property="og:locale" content="pt_BR" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
          <link
            rel="icon"
            sizes="16x16 32x32 64x64"
            href="/icons/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="196x196"
            href="/icons/favicon-192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="160x160"
            href="/icons/favicon-160.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/icons/favicon-96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="/icons/favicon-64.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16.png"
          />
          <link rel="apple-touch-icon" href="/icons/favicon-57.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/icons/favicon-114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/icons/favicon-72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icons/favicon-144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/icons/favicon-60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/icons/favicon-120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/icons/favicon-76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/icons/favicon-152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicon-180.png"
          />
          <script
            data-ad-client="ca-pub-8441913707538621"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css"
            integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog=="
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
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
}

import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* Favicon */}
          <link
            rel='icon'
            type='image/svg+xml'
            href='/images/favicons/favicon.svg'
          />
          <link
            rel='icon'
            type='image/png'
            href='/images/favicons/favicon.png'
          />
          {/* OG meta */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://soundesign.adrobski.fr/' />
          <meta property='og:title' content='Adrobski - Sound Design' />
          <meta
            property='og:description'
            content='Sound Designer & Composer, working with Mekaverse, Blansable, Matteyy, Yoplait, Valorant France...'
          />
          <meta
            property='og:image'
            content='https://soundesign.adrobski.fr/images/meta-socials/og-drob.jpg'
          />
          {/* Twitter Cards */}
          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://soundesign.adrobski.fr/'
          />
          <meta property='twitter:title' content='Adrobski - Sound Design' />
          <meta
            property='twitter:description'
            content='Sound Designer & Composer, working with Mekaverse, Blansable, Matteyy, Yoplait, Valorant France...'
          />
          <meta
            property='twitter:image'
            content='https://soundesign.adrobski.fr/images/meta-socials/twitter-card-drob.jpg'
          />
          {/* Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Urbanist:wght@400;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

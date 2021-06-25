import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

export const DISABLE_SSR_TRANSITION = 'disable-SSR-transition'

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="no-js">
        <title>NextJs Base</title>
        <Head>
          <meta name="referrer" content="no-referrer" />
          <link rel="icon" href="/favicon/favicon.svg" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Web site created using mkn (with Next.js and typescript)"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <style
            id={DISABLE_SSR_TRANSITION}
            dangerouslySetInnerHTML={{
              __html: '*, *::before, *::after { transition: none !important; }',
            }}
          />
        </body>
      </Html>
    )
  }
}
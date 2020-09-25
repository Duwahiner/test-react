import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { extractCritical } from 'emotion-server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
  // for emotion-js
    const page = renderPage()
    const styles = extractCritical(page.html)
    return { ...page, ...styles }
  }

  constructor (props) {
  // for emotion-js
    super(props)
    const { __NEXT_DATA__, ids } = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html lang='es'>
        <Head>
          <meta property='og:type' content='website' />
          <meta name='og:title' property='og:title' content='' />
          <meta name='og:description' property='og:description' content='' />
          <link rel='icon' type='image/png' href='favicon.png' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
          <link rel='stylesheet' type='text/css' href='/styles/normalize.css' />
          <link rel='stylesheet' type='text/css' href='/styles/global.css' />
          {/* for emotion-js */}
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

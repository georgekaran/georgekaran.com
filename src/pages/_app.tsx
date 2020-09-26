import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from '@/styles/global'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A simple boilerplate to work with Typescript, React, NextJs and Styled Components" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import * as S from '@/styles/pages/_app'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { Footer } from '@/components/Footer'
import { Menu } from '@/components/Menu'

function App ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>George Karan Personal Page</title>
        <link rel="shortcut icon" href="/img/icon.svg" />
        <link rel="apple-touch-icon" href="/img/icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="/css/aos.css" />
        <script src="/js/aos.js" async></script>
        {process.browser && <script async>
          AOS.init()
        </script>}
        <meta name="description" content="This is my personal page where i'll post my projects and updates about me." />
      </Head>
      <GlobalStyles />
      <S.Wrapper>
        <Menu />
        <S.Container>
          <S.Main>
            <Component {...pageProps} />
          </S.Main>
        </S.Container>
        <Footer />
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default App
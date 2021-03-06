import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import AOS from 'aos'

import * as S from '@/presentation/styles/pages/_app'
import GlobalStyles from '@/presentation/styles/global'
import theme from '@/presentation/styles/theme'
import { Footer } from '@/presentation/components/Footer'
import { Menu } from '@/presentation/components/Menu'
import I18NProvider from '@/main/factories/context/I18NProvider'

function App ({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <I18NProvider>
      <ThemeProvider theme={theme}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <meta name="description" content="Minha página pessoal onde postarei meus projetos de desenvolvimento e atualizações sobre mim." />
          <title>George Karan</title>
          <link rel="shortcut icon" href="/img/icon.svg" />
          <link rel="apple-touch-icon" href="/img/icon.svg" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="stylesheet" href="/css/aos.css" />
          <link rel="alternate" hrefLang="en" href="https://georgekaran.com/en" />
          <link rel="alternate" hrefLang="es" href="https://georgekaran.com/es" />
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
    </I18NProvider>
  )
}

export default App

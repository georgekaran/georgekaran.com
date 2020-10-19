import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v13-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v13-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: local('Poppins Medium'), local('Poppins-Medium'),
        url('/fonts/poppins-v13-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v13-latin-600.woff2') format('woff2');
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: ${theme.font.family};
    }

    body {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles

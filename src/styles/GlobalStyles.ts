import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.fontColor};
    font: normal 24px 'Source Sans Pro', sans-serif;
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  *, button, input, textarea {
    outline: 0;
    border: none;
  }
`

export default GlobalStyles

import { css } from '@emotion/core'

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }
  ::selection {
    background-color: rgba(var(--grey), 0.5);
    color: rgb(var(--snow));
  }

  html {
    font-size: 16px;
    line-height: normal;
  }

  body {
    background-color: rgb(var(--white));
    color: rgb(var(--grey));
    cursor: default;
    font-family: var(--fontNormal);
  }

  a {
    color: inherit;
    cursor: pointer;
    outline: 0;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    outline: 0;
    padding: 0;
  }
`

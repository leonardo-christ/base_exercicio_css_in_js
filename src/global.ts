import styled, { createGlobalStyle } from 'styled-components'

export const cor = {
  corPrincipal: '#a7727d',
  corSecundaria: '#f9f5e7'
}

export const Estiloglobal = createGlobalStyle`
* {margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Lato, sans-serif;
list-style: none;
}
:root {
  --corPrincipal: ${cor.corPrincipal};
  --corSecundaria: ${cor.corSecundaria};
}
`

export const Corpo = styled.div`
  padding-bottom: 120px;
`

export const Tamanho = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    .container {
      max-width: 80%;
    }
  }
`

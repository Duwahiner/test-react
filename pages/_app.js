import React from 'react'
import { Global, css } from '@emotion/core'
import { Flex } from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Flex
          width={1}
        >
          <Component {...pageProps} />
        </Flex>
      </ThemeProvider>

      <Global
        styles={
          css`
            body::-webkit-scrollbar {
              display: block;
              background: #F6F6F6;
              width: 8px
            }
            
            body::-webkit-scrollbar-thumb {
              background: #D6DBDF;
              border-radius: 8px;
            }

            body::-webkit-scrollbar-thumb:hover{
              background: #aabbf2;
              box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
            }
          `
        }
      />
    </div>
  )
}

export default MyApp

import React from 'react'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

const Title = styled.h1`
  font-family: AeonikBlack;
  font-size: 50px;
  color: ${props => props.theme.colors.title}
`
const Description = styled.span`
  font-family: Aeonik;
  font-size: 20px;
  color: ${props => props.theme.colors.primary}
`
const PageHome = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height={theme.viewport.height}
    >
      <Head>
        <title> Inicio </title>
      </Head>
      <Box>
        <Title> Test React components app </Title>
      </Box>
      <Box mt={[2]}>
        <Description> Creando componentes con react con renderizado del servidor. </Description>
      </Box>
    </Flex>
  )
}

export default PageHome

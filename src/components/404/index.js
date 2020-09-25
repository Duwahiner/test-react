import React from 'react'
import Link from 'next/link'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

const Title = styled.h1`
  font-family: AeonikBold;
  font-size: 30px;
  color: ${props => props.theme.colors.text}
`
const NotFound = styled.h3`
  font-family: AeonikBlack;
  font-size: 100px;
  color: ${props => props.theme.colors.text}
`
const ButtonPage = styled.a`
  width: 250px;
  height: 50px;
  display: block;
  outline: none;
  border: none;
  border-radius: 3px;
  font-family: Aeonik;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  background-color: ${props => props.theme.colors.background};
  transition: all 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`
const NotFound404 = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height={theme.viewport.height}
      bg='background404'
    >
      <Box>
        <Title> Error, esta página no existe </Title>
      </Box>
      <Box mt={[3]}>
        <NotFound> 404 </NotFound>
      </Box>
      <Box mt={[3]}>
        <Link href='/'>
          <ButtonPage> Ir a la página principal → </ButtonPage>
        </Link>
      </Box>
    </Flex>
  )
}

export default NotFound404

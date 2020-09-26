import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import fetch from 'isomorphic-fetch'

const Title = styled.h1`
  font-family: AeonikBlack;
  font-size: 20px;
  color: ${props => props.theme.colors.title}
`
const Description = styled.span`
  font-family: Aeonik;
  font-size: 15px;
  color: ${props => props.theme.colors.text}
`

const Detail = styled.span`
  font-family: Aeonik;
  font-size: 15px;
  color: ${props => props.theme.colors.detail}
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
  background-color: #000000;
  transition: all 0.4s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`

const PageHome = (props) => {
  const [miUser, setMiUser] = useState([])
  const [show, setShow] = useState(false)

  useEffect(() => {
    const get = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/')
      const json = await res.json()
      setMiUser(json)
    }
    get()
  }, [])

  return (
    <Flex
      width={1}
      justifyContent='center'
      sx={{
        position: 'relative'
      }}
    >
      <Head>
        <title> Inicio </title>
      </Head>
      <Users user={miUser} setShow={setShow} show={show} />
      {show && (<ModalUser setShow={setShow} show={show} />)}
    </Flex>
  )
}

const ModalUser = (props) => {
  return (
    <Flex
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#131415',
        position: 'absolute',
        zIndex: '100'
      }}
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        width={1 / 2.5}
        justifyContent='center'
        bg='#ffffff'
        height='400px'
      >
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
          <Box> <Title> Aqui mostraremos los detalles del usario </Title> </Box>
          <ButtonPage onClick={() => props.setShow(!props.show)}> Cerrar modal→ </ButtonPage>
        </Flex>
      </Flex>
    </Flex>
  )
}

const Users = (props) => {
  const theme = useTheme()
  return (
    <Flex
      width={1}
      flexDirection={['column', 'row']}
      flexWrap='wrap'
      justifyContent={['', '']}
    >
      {
        Array.isArray(props.user) && (
          props.user.map((user, index) =>
            <Flex width={[1, 1 / 5]} height='80px' key={index} m={[3]} flex='none'>
              <Flex flex='none'>
                <Flex
                  pr={[3]}
                  sx={{
                    borderRight: `solid 1px ${theme.colors.detail}`
                  }}
                >
                  <Box
                    sx={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: theme.colors.primary,
                      borderRadius: '50%',
                      lineHeight: '80px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.4s',
                      ':hover': {
                        backgroundColor: theme.colors.primaryDark
                      }
                    }}
                    onClick={() => props.setShow(!props.show)}
                  >
                    <Description> Foto </Description>
                  </Box>
                </Flex>
                <Flex ml={[3]} flexDirection='column' justifyContent='center'>
                  <Box> <Title> {user.name} </Title> </Box>
                  <Box> <Detail> {user.email} </Detail> </Box>
                  <Box> <Detail> {user.phone} </Detail> </Box>
                </Flex>
              </Flex>
            </Flex>
          )
        )
      }
    </Flex>
  )
}
export default PageHome

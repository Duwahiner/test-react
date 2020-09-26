import React, { useState } from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { ReactSVG } from 'react-svg'
import { v1 as createID } from 'uuid'

const Title = styled.h1`
  font-family: AeonikBlack;
  color: ${props => props.theme.colors.title};
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 28px;
  }
`
const Button = styled.button`
  width: 140px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin: 3px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: Aeonik;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50px;
  transition: all 0.4s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`
const ButtonSecondary = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  margin: 3px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: Aeonik;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  background-color: ${props => props.theme.colors.text};
  border-radius: 50px;
  transition: all 0.4s;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`
const InputText = styled.input`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 10px 3px;
  outline: none;
  border: none;
  border-radius: 4px;
  font-family: Aeonik;
  font-size: 18px;
  padding: 20px;
  text-align: left;
  line-height: 45px;
  background-color: ${props => props.theme.colors.background};
  border: solid 1px #E6E6E6;
  border-radius: 50px;
  transition: all 0.4s;
  color: ${props => props.theme.colors.primary};
  &:focus {
    border: solid 1px ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: #E6E6E6;
    font-family: Aeonik;
    font-size: 16px;
  }
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
const ModalUserCreate = ({ show, setShow, filterUser, handleCreateUser }) => {
  const theme = useTheme()
  const [user, setUser] = useState(Object.assign({}, {
    name: '',
    email: '',
    phone: '',
    userId: createID().slice(0, 5)
  }))

  const handleOnChange = (event) => {
    const key = event.target.name
    const value = event.target.value
    setUser({ ...user, [key]: value })
  }

  return (
    <Flex
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: `${theme.colors.backgroundModalSecondary}`,
        position: 'absolute',
        zIndex: '100'
      }}
      justifyContent='center'
      alignItems='center'
    >
      <Flex
        width={['300px', '400px', '500px']}
        minHeight={['auto', '300px', '300px']}
        justifyContent=''
        bg={theme.colors.background}
        height={['auto', 'uato', 'auto']}
        py={[10, 20]}
        px={[10, 20]}
        sx={{
          position: 'absolute',
          borderRadius: '15px',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
        br=''
      >
        <Flex width={1} flexDirection='column' justifyContent='' alignItems=''>
          <Flex
            flex='none'
            width={1}
            bg=''
            height='50px'
            flexDirection={['row', 'row']}
            justifyContent={['space-between']}
            alignItems='center'
          >
            <Flex flex='none'>
              <Flex ml={[3]} flexDirection='row' justifyContent='center' alignItems='center'>
                <Box mr={10}> <Title> Craar nuevo contacto </Title> </Box>
              </Flex>
            </Flex>

            <ButtonSecondary
              onClick={() => setShow(!show)}
            >
              <Box width='17px' height='17px'> <ReactSVG src='svg/icon-cerrar.svg' /></Box>
            </ButtonSecondary>
          </Flex>

          <Flex
            flex='auto'
            width={1}
            bg=''
            height='auto'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            py={4}
          >
            <Box width={1 / 1.4}>
              <InputText
                type='text'
                name='name'
                placeholder='Nombre completo'
                onChange={(event) => handleOnChange(event)}
              />
            </Box>
            <Box width={1 / 1.4}>
              <InputText
                type='email'
                name='email'
                placeholder='Correo'
                onChange={(event) => handleOnChange(event)}
              />
            </Box>
            <Box width={1 / 1.4}>
              <InputText
                type='tel'
                name='phone'
                placeholder='Movil'
                onChange={(event) => handleOnChange(event)}
              />
            </Box>
          </Flex>

          <Flex flex='none' width={1} bg='' height='auto'>
            <Flex flex='auto' justifyContent='center' alignItems={['center']} flexDirection={['column', 'row']}>
              <Button
                onClick={() => {
                  if (user.name !== '' && user.email !== '' && user.phone !== '') {
                    handleCreateUser(user)
                  }
                }}
              >
                <Box mr='6px'> Listo </Box>
              </Button>

              <Button
                onClick={() => setShow(!show)}
              >
                <Box mr='6px'> Cancelar </Box>
              </Button>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ModalUserCreate

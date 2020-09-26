import React from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { ReactSVG } from 'react-svg'

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

const ModalUserRemove = ({ show, setShow, filterUser }) => {
  const theme = useTheme()
  // const user = Object.assign({}, ...filterUser)

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
                <Box mr={10}> <Title> Eliminar nuevo contacto </Title> </Box>
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
            <Flex flex='none' width={1} bg='' height='auto'>
              <Flex flex='auto' justifyContent='center' alignItems={['center']} flexDirection={['column', 'row']}>
                <Button
                  onClick={() => setShow(!show)}
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
    </Flex>
  )
}

export default ModalUserRemove

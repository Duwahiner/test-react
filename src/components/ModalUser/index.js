import React from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'
import { ReactSVG } from 'react-svg'

const Title = styled.h1`
  font-family: AeonikBlack;
  font-size: 25px;
  color: ${props => props.theme.colors.title};
  text-align: center;
`
const Description = styled.span`
  font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Aeonik'};
  font-size: ${(props) => props.textSize ? props.textSize : '12px'};
  color: ${props => props.theme.colors.text}
`
const Detail = styled.span`
  font-family: Aeonik;
  font-size: 15px;
  color: ${props => props.theme.colors.title}
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
const ModalUser = ({
  setShow,
  show,
  setShowCreate,
  showCreate,
  setShowEdit,
  showEdit,
  setShowRemove,
  showRemove,
  filterUser
}) => {
  const theme = useTheme()
  const user = Object.assign({}, ...filterUser)

  const split = (string) => {
    const firstLette = string.split('')
    return firstLette[0]
  }

  return (
    <Flex
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: `${theme.colors.backgroundModal}`,
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
              <Flex
                pr={[3]}
                alignItems='center'
                sx={{
                  borderRight: `solid 1px ${theme.colors.detail}`
                }}
              >
                <Flex
                  sx={{
                    width: ['40px'],
                    height: ['40px'],
                    backgroundColor: theme.colors.primary,
                    borderRadius: '50%',
                    lineHeight: '',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.4s',
                    ':hover': {
                      backgroundColor: theme.colors.primaryDark
                    }
                  }}
                  flex='none'
                  alignItems='center'
                  justifyContent='center'
                  onClick={() => setShow(!show)}
                >
                  <Box
                    sx={{
                      opacity: '0.6'
                    }}
                  >
                    <Description fontFamily='AeonikBold' textSize='25px'> {split('Duwahiner Moreco Cuesta')} </Description>
                  </Box>
                </Flex>
              </Flex>

              <Flex ml={[3]} flexDirection='row' justifyContent='center' alignItems='center'>
                <Box mr={10}> <Detail> Hola, </Detail> </Box>
                <Box> <Detail> {user.name} </Detail> </Box>
              </Flex>
            </Flex>

            <ButtonSecondary
              onClick={() => setShow(!show)}
            >
              <Box width='17px' height='17px'> <ReactSVG src='svg/icon-cerrar.svg' /></Box>
            </ButtonSecondary>
          </Flex>

          <Flex flex='auto' width={1} bg='' height='100px' justifyContent='center' alignItems='center'>
            <Box> <Title> Ok, Juguemos un poco </Title> </Box>
          </Flex>

          <Flex flex='none' width={1} bg='' height='auto'>
            <Flex flex='auto' justifyContent='center' alignItems={['center']} flexDirection={['column', 'row']}>
              <Button
                onClick={() => setShowCreate(!showCreate)}
              >
                <Box mr='6px'> Crear </Box>
                <Box width='17px' height='17px'> <ReactSVG src='svg/icon-mas.svg' /></Box>
              </Button>

              <Button
                onClick={() => setShowEdit(!showEdit)}
              >
                <Box mr='6px'> Editar </Box>
                <Box width='17px' height='17px'> <ReactSVG src='svg/icon-lapiz.svg' /></Box>
              </Button>

              <Button
                onClick={() => setShowRemove(!showRemove)}
              >
                <Box mr='6px'> Eliminar </Box>
                <Box width='17px' height='17px'> <ReactSVG src='svg/icon-basura.svg' /></Box>
              </Button>
            </Flex>

          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ModalUser

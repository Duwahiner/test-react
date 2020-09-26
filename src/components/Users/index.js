import React from 'react'
import { Flex, Box } from 'rebass'
import styled from '@emotion/styled'
import { useTheme } from 'emotion-theming'

const Title = styled.h1`
  font-family: AeonikBlack;
  font-size: 18px;
  color: ${props => props.theme.colors.title}
`
const Description = styled.span`
  font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Aeonik'};
  font-size: ${(props) => props.textSize ? props.textSize : '12px'};
  color: ${props => props.theme.colors.text}
`

const Detail = styled.span`
  font-family: Aeonik;
  font-size: 12px;
  color: ${props => props.theme.colors.detail}
`
const DetailStrong = styled.strong`
  font-family: AeonikBold;
  font-size: 12px;
  color: ${props => props.theme.colors.title}
`

const Users = ({ show, setShow, user, setFilterUser }) => {
  const valideUserData = () => {
    const valueData = Array.isArray(user)
    if (valueData) {
      return user
    } else {
      return []
    }
  }

  const split = (string) => {
    const firstLette = string.split('')
    return firstLette[0]
  }

  const getUsuer = (event) => {
    const filterOFUser = user.filter((object, index) => {
      if (object.id.toString() === event.target.id) {
        return object
      }
    })
    setFilterUser(filterOFUser)
  }

  const getDataUsers = valideUserData()
  const theme = useTheme()

  return (
    <Flex
      width={[1]}
      maxWidth='1130px'
      minHeight='auto'
      flexDirection={['column', 'row', 'row']}
      flexWrap={['nowrap', 'wrap', 'wrap']}
      justifyContent={[
      ]}
      sx={{
        '@media screen and (min-width: 1025px)': {
          justifyContent: 'flex-start'
        },
        '@media screen and (max-width: 1024px)': {
          justifyContent: 'center'
        }
      }}
      alignItems='center'
      bg=''

    >
      {
        getDataUsers.length > 1 ? (
          user.map((user, index) =>
            <Box
              width={['280px', '320px', '360px']}
              maxWidth={['280px', '320px', '360px']}
              height='auto'
              key={index}
              py={[3, 3, 4]}
              px={[2, 2, 3]}
              m={[3, 2]}
              flex='none'
              sx={{
                boxSizing: 'border-box',
                border: `solid 1px ${theme.colors.boderColor}`,
                borderRadius: '5px',
                backgroundColor: `${theme.colors.background}`,
                boxShadow: `0px 3px 8px 0px ${theme.colors.shadows}`
              }}
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
                      width: ['60px', '70px'],
                      height: ['60px', '70px'],
                      backgroundColor: theme.colors.primary,
                      borderRadius: '50%',
                      lineHeight: '',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.4s',
                      ':hover': {
                        backgroundColor: theme.colors.primaryDark,
                        position: 'relative'
                      }
                    }}
                    flex='none'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        width: ['60px', '70px'],
                        height: ['60px', '70px'],
                        background: '',
                        zIndex: '20'
                      }}
                      id={user.id}
                      onClick={(event) => {
                        setShow(!show)
                        getUsuer(event)
                      }}
                    />

                    <Box
                      sx={{
                        opacity: '0.6'
                      }}
                    >
                      <Description fontFamily='AeonikBold' textSize='60px'> {split(user.name)} </Description>
                    </Box>
                  </Flex>
                </Flex>
                <Flex ml={[3]} flexDirection='column' justifyContent='center'>
                  <Box> <Title> {user.name} </Title> </Box>
                  <Box>
                    <Detail>
                      <DetailStrong> Mail: </DetailStrong> {user.email}
                    </Detail>
                  </Box>
                  <Box>
                    <Detail>
                      <DetailStrong> Movil: </DetailStrong> {user.phone}
                    </Detail>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          )
        ) : <Description> Lo sentimos ahora mismo no hay datos </Description>
      }
    </Flex>
  )
}
export default Users

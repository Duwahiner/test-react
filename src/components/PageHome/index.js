import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Flex } from 'rebass'
import ModalUser from '../ModalUser'
import ModalUserCreate from '../ModalUserCreate'
import ModalUserEdit from '../ModalUserEdit'
import ModalUserRemove from '../ModalUserRemove'
import Users from '../Users'
import { getUser, postUser, putUser, deleteUser } from '../api'

const PageHome = (props) => {
  const [miUser, setMiUser] = useState([])
  const [show, setShow] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [filterUser, setFilterUser] = useState([])

  useEffect(() => {
    const get = async () => {
      const users = await getUser()
      setMiUser(users)
    }
    get()
  }, [])

  const handleCreateUser = (newUser) => {
    const post = async () => {
      const users = await postUser(newUser)
      if (typeof users === 'object') {
        const updateUsers = miUser.concat([{ ...users, id: users.userId }])
        setMiUser(updateUsers)
        setShow(!show)
        setShowCreate(!showCreate)
      }
    }
    post()
  }

  const handleUpdateUser = (newUser, id) => {
    const post = async () => {
      const users = await putUser(newUser, id)
      if (typeof users === 'object') {
        const updateUsers = miUser.map((user) => {
          if (user.id === id) {
            return { ...user, name: users.name, email: users.email, phone: users.phone }
          } else {
            return user
          }
        })
        setMiUser(updateUsers)
        setShowEdit(!showEdit)
        setShow(!show)
      }
    }
    post()
  }

  const handleRemoveUser = (newUser) => {
    const deleteUs = async () => {
      const users = await deleteUser(newUser.id)
      if (typeof users === 'object') {
        const updateUsers = miUser.filter((user) => {
          if (user.id !== newUser.id) {
            return user
          }
        })
        setMiUser(updateUsers)
        setShowRemove(!showRemove)
        setShow(!show)
      }
    }
    deleteUs()
  }

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
      <Users user={miUser} setShow={setShow} show={show} setFilterUser={setFilterUser} />
      {show && (
        <ModalUser
          setShow={setShow}
          show={show}
          setShowCreate={setShowCreate}
          showCreate={showCreate}
          setShowEdit={setShowEdit}
          showEdit={showEdit}
          setShowRemove={setShowRemove}
          showRemove={showRemove}
          filterUser={filterUser}
          setFilterUser={setFilterUser}

        />)}
      {showCreate && (
        <ModalUserCreate
          setShow={setShowCreate}
          show={showCreate}
          filterUser={filterUser}
          handleCreateUser={handleCreateUser}
        />)}
      {showEdit && (
        <ModalUserEdit
          setShow={setShowEdit}
          show={showEdit}
          filterUser={filterUser}
          handleUpdateUser={handleUpdateUser}
        />)}
      {showRemove && (
        <ModalUserRemove
          setShow={setShowRemove}
          show={showRemove}
          filterUser={filterUser}
          handleRemoveUser={handleRemoveUser}
        />)}
    </Flex>
  )
}

export default PageHome

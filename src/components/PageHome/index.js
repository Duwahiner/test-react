import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Flex } from 'rebass'
import fetch from 'isomorphic-fetch'
import ModalUser from '../ModalUser'
import ModalUserCreate from '../ModalUserCreate'
import ModalUserEdit from '../ModalUserEdit'
import ModalUserRemove from '../ModalUserRemove'
import Users from '../Users'

const PageHome = (props) => {
  const [miUser, setMiUser] = useState([])
  const [show, setShow] = useState(false)
  const [showCreate, setShowCreate] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [showRemove, setShowRemove] = useState(false)
  const [filterUser, setFilterUser] = useState([])

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
      {showCreate && (<ModalUserCreate setShow={setShowCreate} show={showCreate} filterUser={filterUser} />)}
      {showEdit && (<ModalUserEdit setShow={setShowEdit} show={showEdit} filterUser={filterUser} />)}
      {showRemove && (<ModalUserRemove setShow={setShowRemove} show={showRemove} filterUser={filterUser} />)}
    </Flex>
  )
}

export default PageHome

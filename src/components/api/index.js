import fetch from 'isomorphic-fetch'

export const getUser = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await res.json()
  return users
}

export const postUser = async (nweUser) => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        ...nweUser
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
  )
  const users = await res.json()
  return users
}

export const putUser = async (newUser, id) => {
  const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'PUT',
          body: JSON.stringify({
            ...newUser
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }
  )
  const users = await res.json()
  return users
}

export const deleteUser = async (id) => {
  const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE'
        }
  )
  const users = await res.json()
  return users
}

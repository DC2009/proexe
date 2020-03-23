import React, { useState, useEffect } from 'react'

const UserContext = React.createContext()
const url = 'https://jsonplaceholder.typicode.com/users'

const UserProvider = props => {
  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const usersData = await fetch(url)
      const users = await usersData.json()
      setUsers(users)
      setLoading(false)
    } catch(err) {
      console.log('Error while fetching data:', err.message)
    }
  }

  const handleAdd = (name, email) => {
    setUsers(users.concat([{
      id: users.reduce((max, user) => max = Math.max(max, user.id), 0) + 1,
      name: name,
      email: email
    }]))
  }

  const handleEdit = (id, name, email) => {
    const user = getUser(id)
    if (user) {
      user.name = name
      user.email = email
    }
  }

  const handleDelete = id => {
    if (users) {
      const idx = users.findIndex(user => user.id === id)
      if (idx > -1) {
        const newUsers = [...users]
        newUsers.splice(idx, 1)
        setUsers(newUsers)
      }
    }
  }

  const getUser = id => {
    if (users) {
      return users.find(user => user.id === id)
    }
  }

  const sort = (direction) => {
    const sorted = [...users]
    if (direction === 'ascending') {
      sorted.sort((a, b) => a.username.localeCompare(b.username))
    } else if (direction === 'descending') {
      sorted.sort((a, b) => b.username.localeCompare(a.username))
    }
    setUsers(sorted)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return(
    <UserContext.Provider 
      value={{
        getUser,
        handleAdd,
        handleDelete,
        handleEdit,
        loading,
        sort,
        users
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
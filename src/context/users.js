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

  useEffect(() => {
    fetchUsers()
  }, [])

  return(
    <UserContext.Provider 
      value={{
        loading,
        users
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }
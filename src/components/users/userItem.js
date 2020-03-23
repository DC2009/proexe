import React from 'react'
import { useHistory } from 'react-router-dom'
import './usersList.css'
import './userItem.css'

const UserItem = (user) => {
  const history = useHistory()

  const handleEditUser = () => history.push(`/EditUser/:${user.id}`)

  return (
    <li key={user.id} className='user-grid user-item'>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
      <button className='edit' onClick={handleEditUser}>edit</button>
      <button className='delete'>delete</button>
    </li>
  )
}

export default UserItem

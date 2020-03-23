import React from 'react'
import './users.css'
import './userItem.css'

const UserItem = (user, onEdit) => (
  <li key={user.id} className='user-grid user-item'>
    <p>{user.id}</p>
    <p>{user.name}</p>
    <p>{user.username}</p>
    <p>{user.email}</p>
    <p>{user.address.city}</p>
    <button className='edit' onClick={() => onEdit(user.id)}>edit</button>
    <button className='delete'>delete</button>
  </li>
)

export default UserItem

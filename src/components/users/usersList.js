import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './usersList.css'
import { UserContext } from '../../context/users'
import UserItem from './userItem'

const UsersList = () => {
  const { loading, users } = useContext(UserContext)
  const history = useHistory()

  const handleAddNew = () => history.push('/NewUser')

  return (
    <div className='users-list'>
      <header className='users-list-header'>
        <h2>Users list</h2>
        <button onClick={handleAddNew}>Add New</button>
      </header>
      <section className='users-list-section'>
        <header className='user-grid'>
          <h3>Id</h3>
          <h3>Name</h3>
          <h3>Username</h3>
          <h3>Email</h3>
          <h3>City</h3>
          <h3>Edit</h3>
          <h3>Delete</h3>
        </header>
        <div>
          {loading && <h4>Loading data...</h4>}
          {users && 
            <ul>
              {users.map(user => UserItem(user))}
            </ul>
          }
        </div>
      </section>
    </div>
  )
}

export default UsersList

import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './users.css'
import './usersList.css'
import { UserContext } from '../../context/users'
import UserItem from './userItem'

const UsersList = () => {
  const { handleDelete, loading, users } = useContext(UserContext)

  const history = useHistory()

  const handleAddUser = () => history.push('/NewUser')
  const handleEditUser = id => history.push(`/EditUser/${id}`)
  const handleDeleteUser = id => {
    console.log(id)
    handleDelete(id)
  }

  return (
    <div className='users-route'>
      <header>
        <h2>Users list</h2>
        <button onClick={handleAddUser}>Add New</button>
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
              {users.map(user => UserItem(user, handleEditUser, handleDeleteUser))}
            </ul>
          }
        </div>
      </section>
    </div>
  )
}

export default UsersList

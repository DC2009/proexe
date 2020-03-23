import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './users.css'
import './usersList.css'
import { UserContext } from '../../context/users'
import UserItem from './userItem'
import UserDeleteModal from './userDeleteModal'

const UsersList = () => {
  const { handleDelete, loading, sort, users } = useContext(UserContext)
  const [ deleteUser, setDeleteUser ] = useState()
  const [ sortDirection, setSortDirection ] = useState()

  const history = useHistory()

  const handleAddUser = () => history.push('/NewUser')
  const handleEditUser = id => history.push(`/EditUser/${id}`)
  const handleDeleteUser = user => {
    setDeleteUser(user)
  }

  const handleSort = () => {
    if (sortDirection === 'ascending') {
      setSortDirection('descending')
      sort('descending')
    } else {
      setSortDirection('ascending')
      sort('ascending')
    }
  }

  return (
    <div className='users-route'>
      {deleteUser &&
        <UserDeleteModal user={deleteUser} onCancel={() => setDeleteUser()} onOk={handleDelete}/>}
      <header>
        <h2>Users list</h2>
        <button onClick={handleAddUser}>Add New</button>
      </header>
      <section className='users-list-section'>
        <header className='user-grid'>
          <h3>Id</h3>
          <h3>Name</h3>
          <h3 className={`sortable ${sortDirection}`} onClick={handleSort}>Username</h3>
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

import React from 'react'
import './usersList.css'

const UsersList = () => (
  <div className='users-list'>
    <header className='users-list-header'>
      <h2>Users list</h2>
      <button>Add New</button>
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
    </section>
  </div>
)

export default UsersList

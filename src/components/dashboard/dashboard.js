import React from 'react'
import './dashboard.css'
import Header from './header'
import UsersList from '../users/usersList'

const Dashboard = () => (
  <div className='dashboard'>
    <Header/>
    <UsersList/>
  </div>
)

export default Dashboard
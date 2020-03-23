import React from 'react'
import './dashboard.css'
import Header from './header'
import Routes from '../router/routes'

const Dashboard = () => (
  <div className='dashboard'>
    <Header/>
    <Routes/>
  </div>
)

export default Dashboard
import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'
import { UserContext } from '../../context/users'

import './users.css'
import './userForm.css'

const UserForm = () => {
  const [{ name, email }, setUser] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})

  const { users, getUser, handleAdd, handleEdit } = useContext(UserContext)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const user = getUser(parseInt(id))
      if (user) {
        setUser({
          name: user.name,
          email: user.email
        })
      }
    }
  }, [id, users, getUser])

  const history = useHistory()

  const handleName = (value) => {
    if (errors['name']) {
      delete errors.name
    }

    setUser({ 
      name: value,
      email
    })
  }

  const handleEmail = (value) => {
    if (errors['email']) {
      delete errors.email
    }

    setUser({
      name,
      email: value
    })
  }

  const handleCancel = (e) => {
    e.preventDefault()
    history.push('/')
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validate(name, email)
    if (Object.keys(error).length === 0) {
      if (id) {
        handleEdit(parseInt(id), name, email)
      } else {
        handleAdd(name, email)
      }
      history.push('/')
    } else {
      setErrors(error)
    }
  }

  const validate = (name, email) => {
    const error = {}
    if (name.length === 0) {
      error['name'] = `Name can't be empty`
    }

    if (email.length < 5) {
      error['email'] = 'Email should be at least 5 charcters long'
    } else if (email.split('').filter(x => x === '@').length !== 1) {
      error['email'] = 'Email should contain a @'
    } else if (email.indexOf('.') === -1) {
      error['email'] = 'Email should contain at least one dot'
    }
    return error
  }

  return(
    <div className='users-route'>
      <header>
        Form
      </header>
      <form className='user-form' onSubmit={handleSubmit}>
        <div className='form-element-wrapper'>
          <div className='input-wrapper'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' value={name} onChange={(e) => handleName(e.target.value)}/>
          </div>
          <p className={`error-message ${errors.name ? '' : 'hidden'}`}>{errors.name}</p>
        </div>
        <div className='form-element-wrapper'>
          <div className='input-wrapper'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={(e) => handleEmail(e.target.value)}/>
          </div>
          <p className={`error-message ${errors.email ? '' : 'hidden'}`}>{errors.email}</p>
        </div>
        <div className='form-element-wrapper'>
          <div className='input-wrapper'>
            <button className='form-button cancel' onClick={handleCancel}>Cancel</button>
            <input className='form-button submit' type='submit' value='Submit'/>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserForm

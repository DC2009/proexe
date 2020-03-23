import React from 'react'
import Modal from '../modal/modal'
import './userDeleteModal.css'

const UserDeleteModal = ({ user, onCancel, onOk }) => (
  <Modal onOverlayClick={onCancel}>
    <div className='delete-modal'>
      <header>
        <h2>Delete</h2>
      </header>
      <div className='content'>
        <p>Confirm deletion of user: </p>
        <p className='user-name'>{user.name}</p>
      </div>
      <footer>
        <button className='cancel-button' onClick={onCancel}>Cancel</button>
        <button className='delete-button' onClick={() => onOk(user.id)}>Delete</button>
      </footer>
    </div>
  </Modal>
)

export default UserDeleteModal

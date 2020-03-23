import React from 'react'
import './modal.css'

const Modal = ({onOverlayClick, ...props }) => (
  <div className='modal-overlay' onClick={onOverlayClick}>
    <div className='modal'>
      {props.children}
    </div>
  </div>
)

export default Modal

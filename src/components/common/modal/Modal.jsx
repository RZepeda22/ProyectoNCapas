import React from 'react'

function Modal({children}) {
  return (
    <div className='modal-container'>
        <div>
            Header
            <button >CLoese</button>
        </div>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Modal
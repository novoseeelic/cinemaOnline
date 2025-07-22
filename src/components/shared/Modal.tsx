import React from 'react'
import './Modal.scss'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  )
}
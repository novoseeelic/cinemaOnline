import React from 'react'
import './TrailerModal.scss'

interface TrailerModalProps {
  trailerUrl: string
  onClose?: () => void
}

export const TrailerModal: React.FC<TrailerModalProps> = ({ trailerUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal--trailer" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <iframe
          src={trailerUrl}
          title="Трейлер"
          className="trailer-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
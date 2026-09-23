import React, { useEffect } from 'react';

export default function Modal({ isOpen, title, text, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal') {
      onClose();
    }
  };

  return (
    <div 
      className={`modal ${isOpen ? 'open' : ''}`} 
      id="modal" 
      aria-hidden={!isOpen}
      onClick={handleBackgroundClick}
    >
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button className="modal-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="modal-icon">✦</div>
        <h3 id="modalTitle">{title}</h3>
        <p id="modalText">{text}</p>
      </div>
    </div>
  );
}

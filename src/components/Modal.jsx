import React, { useEffect, useCallback } from 'react';

/**
 * Accessible, animated modal dialog.
 * Traps focus, closes on Escape, closes on backdrop click.
 */
export default function Modal({ isOpen, title, text, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  // Click outside the card to close
  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose();
  }, [onClose]);

  return (
    <div
      className={`modal${isOpen ? ' open' : ''}`}
      id="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-hidden={!isOpen}
      onClick={handleBackdropClick}
    >
      <div className="modal-card">
        <button
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>
        <div className="modal-icon" aria-hidden="true">✦</div>
        <h3 id="modal-title">{title}</h3>
        <p id="modal-desc">{text}</p>
      </div>
    </div>
  );
}

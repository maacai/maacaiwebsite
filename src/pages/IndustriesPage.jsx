import React, { useState } from 'react';
import Industries from '../components/Industries';
import Modal from '../components/Modal';
import useTitle from '../hooks/useTitle';

export default function IndustriesPage() {
  useTitle('MAAC AI | Industries');
  const [modalState, setModalState] = useState({ isOpen: false, title: '', text: '' });

  const openModal = (title, text) => {
    setModalState({ isOpen: true, title, text });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <main id="main-content">
        <Industries openModal={openModal} />
      </main>
      <Modal
        isOpen={modalState.isOpen}
        title={modalState.title}
        text={modalState.text}
        onClose={closeModal}
      />
    </>
  );
}

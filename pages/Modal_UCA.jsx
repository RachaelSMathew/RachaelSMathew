
import React from 'react';

const Modal_UCA = ({ open, onClose }) => {
    if (!open) return null;
            
  return (
    <div onClick={onClose} className='overlayExp'>
      <div class="backgroundExp"></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainerExp'
      >
        <div className='modalRightExp'>
          <p className='closeBtnExp' onClick={onClose}>
            X
          </p>
          <div className='contentExp'>
            <h1>Undergraduate Course Assistant</h1>
            <p>Graded students' work, tutored students one-on-one and attended weekly CS 121 lab sessions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_UCA;

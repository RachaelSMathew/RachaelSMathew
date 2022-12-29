import React from 'react';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
            
  return (
    <div onClick={onClose} className='overlayExp'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainerExp'
      >
        <div className='modalRightExp'>
          <p style="color: white" className='closeBtnExp' onClick={onClose}>
            X
          </p>
          <div className='contentExp'>
            <h1 style="color: white">$20 CREDIT</h1>
            <p style="color: white">for your first tade?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

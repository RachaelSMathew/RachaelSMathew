import React from 'react';

const Modal_Nuance = ({ open, onClose }) => {
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
          <p className='closeBtnExp' onClick={onClose}>
            X
          </p>
          <div className='contentExp'>
            <h1>iOS Mobile Development Intern</h1>
            <p>Used YAML pipelines in Azure DevOps to create Xcode simulator builds and run snapshot tests. Created Veracode Archive and uploaded the scan, created a streamlined YAML pipeline with multiple sub-tasks using parallel jobs and templates for clean, high-efficiency code.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_Nuance;

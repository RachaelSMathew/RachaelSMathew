import React from 'react';

const Modal_iRobot = ({ open, onClose }) => {
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
            <h1>Software DevOps Co-op</h1>
            <p>Created automated Jenkins pipelines using EC2 instances and executed tasks in a Docker container using an ECR image. Developed a feature for Bitbucket pull request pages using ScriptRunner and Groovy, which sends requests from Bitbucket to Jenkins to trigger a pipeline.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal_iRobot;

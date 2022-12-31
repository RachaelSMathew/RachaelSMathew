import React from 'react';

const Modal_CYE = ({ open, onClose }) => {
    if (!open) return null;
            
  return (
    <div onClick={onClose} className='overlayExp'>
      <body style="overflow:hidden">
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
            <h1>iOS Developer</h1>
            <p>Created a calendar, which could have events created and added on as a part of the CYE iPad app using Swift and Xcode Transferred video files to AWS S3 storage and used AWS CLI to create a Bash script to download and upload video files Sent iOS logs to AWS Cloudwatch using AWS Soto Swift Package Manager in Xcode</p>
          </div>
        </div>
      </div>
      </body>
    </div>
  );
};

export default Modal_CYE;

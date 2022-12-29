import React, { useRef, Suspense } from 'react';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    const ref = useRef()

    useEffect(() => {
    	const checkIfClickedOutside = (e) => {
     	 // If the menu is open and the clicked target is not within the menu,
    	  // then close the menu
     	 if (ref.current && !ref.current.contains(e.target)) {
      	 onClose();
        }
    };

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
     	 // Cleanup the event listener
     	 document.removeEventListener("click", checkIfClickedOutside)
    	}
    }, [onClose]);
            
  return (
    <div onClick={onClose} className='overlayExp'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainerExp' ref={ref}
      >
        <div className='modalRightExp'>
          <p className='closeBtnExp' onClick={onClose}>
            X
          </p>
          <div className='contentExp'>
            <p>Do you want a</p>
            <h1>$20 CREDIT</h1>
            <p>for your first tade?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

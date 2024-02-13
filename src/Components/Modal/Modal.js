import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";


function Modal({ onClose, children }) {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
      <div className="modal__box">
        <div
            onClick={onClose}
            className="modal__background"
        ></div>
        <div className="modal__item">
          <div className="modal__content">
            <button  onClick={onClose} className="modal__content--btn" aria-label="Close"><AiOutlineClose/></button>
            {children}
          </div>
        </div>
      </div>,
      document.querySelector('.modal-container')
  );
}

export default Modal;
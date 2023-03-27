import { createPortal } from "react-dom"
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';


const modalRoot = document.querySelector("#modals")

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    function escapeClose(evt) {
      if (evt.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", escapeClose);
    return () => {
      document.removeEventListener("keydown", escapeClose);
    };
  });

  return createPortal(
    <>
      <div className={style.modal}>
        
        <div className={style.modal__close_icon}>
          <CloseIcon onClick={onClose} />
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func
}

export default Modal;

 
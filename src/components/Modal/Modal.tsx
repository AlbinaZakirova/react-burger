import { FC } from 'react';
import { createPortal } from "react-dom"
import { useEffect } from 'react';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { TModal } from "../../utils/types/types";

const modalRoot = document.querySelector("#modals")

const Modal: FC <TModal> = ({ onClose, children }) => {
  useEffect(() => {
    function escapeClose(evt:KeyboardEvent) {
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
        <div className={style.modal__close_icon} onClick={onClose} aria-label='Закрыть модальное окно'>
          <CloseIcon type='primary'/>
        </div>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot as HTMLDivElement
  );
};

export default Modal;

 
import { createPortal } from "react-dom"
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './Modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const modalRoot = document.querySelector("#modals")

export const Modal = ({title, onClose, children}) => {
  return createPortal(
    <>
      <section className={style.modal}>
        <div className={classnames(style.modal__header, 'ml-10 mt-10 mr-10')}>
          <h2 className={classnames(style.title, 'text text_type_main-large')}>{title}</h2>
          <CloseIcon onClick={onClose} />
        </div>
        {children}
      </section>
      <ModalOverlay className={style.overlay} onClick={onClose} />
    </>, modalRoot
  ) 
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired
}

 


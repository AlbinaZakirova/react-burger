import PropTypes from 'prop-types';
import style from './ModalOverlay.module.css';

interface IModalOverlay {
  onClick: () => void;
}

const ModalOverlay = ({ onClick }: IModalOverlay) => {
  return <div onClick={onClick} className={style.overlay}></div>;
};



export default ModalOverlay;

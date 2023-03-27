
import PropTypes from 'prop-types';
import style from './ModalOverlay.module.css';

const ModalOverlay = ({ onClick }) => {
  return <div onClick={onClick} className={style.overlay}></div>;
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default ModalOverlay;

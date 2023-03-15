import { useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './ModalOverlay.module.css';

const ModalOverlay = ({onClick}) => {
  useEffect(() => {
    function closeOnEscape(evt) {
      if (evt.key === 'Escape') {
        onClick();
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);
  return (
  <div onClick={onClick} className={style.overlay}></div>
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default ModalOverlay;
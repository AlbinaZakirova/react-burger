import classnames from 'classnames';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from './OrderDetails.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';

const OrderDetails = ({onClose}) => {

  return (
    <section className={style.modal}>
      <ModalOverlay className={style.overlay} onClick={onClose} />
      <div className={style.order_popup}>
        <button className={style.close_icon} onClick={onClose}>
          <CloseIcon/>
        </button>
        <p className={classnames(style.order_number, 'text text_type_digits-large', 'mb-8', 'mt-30')}>1 125</p>
        <p className='mb-15 text text_type_main-medium'>идентификатор заказа</p>
        <div className={classnames(style.done_image, 'mb-15')}></div>
        <p className='text text_type_main-small mb-2'>Ваш заказ начали готовить</p>
        <p className='text text_type_main-small mb-2 text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
      </div>
    </section>
  )
}

export default OrderDetails;
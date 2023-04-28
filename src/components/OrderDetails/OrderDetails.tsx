import { FC } from 'react';
import classnames from 'classnames';
import style from './OrderDetails.module.css';

interface IOrderDetails {
  number: number;
}

const OrderDetails: FC <IOrderDetails> = ({number}) => {
  return (
    <div className={style.orderDetails}>
      <h2 className="text text_type_digits-large mt-30 mb-8">{number}</h2>
      <h3 className="text text_type_main-medium">идентификатор заказа</h3>
      <div className={classnames(style.done_image, 'mb-15')}></div>
      <p className="text text_type_main-small mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-small text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
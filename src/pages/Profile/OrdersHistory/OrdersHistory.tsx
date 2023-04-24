import classnames from 'classnames';
import style from './OrdersHistory.module.css'
import { useAppSelector } from '../../../utils/hooks';
import OrderTemplate from '../../../components/OrderTemplate/OrderTemplate';
import { TOrder } from '../../../services/reducers/feed';

const OrdersHistory = () => {
    
  const orders = useAppSelector(state => state.orderHistoryStore?.data?.orders)
    
  return (
    <section className={style.orders}>
      { orders && orders.length > 0
        ? <ul className={classnames(style.orderFeed, 'custom-scroll')}>
          {orders?.map((order: TOrder) => {
            return <OrderTemplate order={order} key={order?._id} />
          })}
           </ul>
        : <h2 className={classnames(style.digit__effect, style.orderTitle, 'text text_type_digits-medium')}>У вас еще нет заказов</h2>
          }
    </section>
  );
};

export default OrdersHistory; 
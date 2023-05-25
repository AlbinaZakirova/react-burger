import classnames from 'classnames';
import style from './OrdersHistory.module.css'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import OrderTemplate from '../../../components/OrderTemplate/OrderTemplate';
import { TOrder } from '../../../services/reducers/feed';
import { useEffect } from 'react';
import { wsConnectOrder, wsDisconnectOrder } from '../../../services/actions/orderHistoryActions';
import { BURGER_API_WSS_ORDERS } from '../../../utils/api';


const OrdersHistory = () => {
    
  const orders = useAppSelector(state => state.orderHistoryStore?.data?.orders)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectOrder({ wsUrl: BURGER_API_WSS_ORDERS, withTokenRefresh: true }))
    return () => {
      dispatch(wsDisconnectOrder())
    }
  }, []);
    
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
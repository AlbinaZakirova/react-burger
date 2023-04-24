import style from './OrderFeed.module.css'
import classnames from 'classnames';
import OrderTemplate from '../OrderTemplate/OrderTemplate';
import { TOrder } from '../../services/reducers/feed';
import { useAppSelector } from '../../utils/hooks';

const OrderFeed = () => {
  const orders = useAppSelector(state => state.feedStore?.data?.orders)
    return (
      <section className={style.orderFeed__container}>
        <h2 className={classnames(style.orderFeed__title, 'text text_type_main-large mb-5')}>Лента заказов</h2>
        <ul className={classnames(style.orderFeed__all, 'custom-scroll')}>
          {orders?.map((order: TOrder) => {
            return <OrderTemplate order={order} key={order?._id} />
          })}
        </ul>
      </section>
    );
};

export default OrderFeed;

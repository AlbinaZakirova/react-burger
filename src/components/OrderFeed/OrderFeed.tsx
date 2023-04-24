import styles from './OrderFeed.module.css'
import OrderTemplate from '../OrderTemplate/OrderTemplate';
import { TOrder } from '../../services/reducers/feed';
import { useAppSelector } from '../../utils/hooks';

const OrderFeed = () => {
    const orders = useAppSelector(state => state.orderHistoryStore?.data?.orders)
    return (
        <section className={styles.container}>
            <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
            <ul className={`${styles.orderFeed} custom-scroll`}>
                {orders?.map((order: TOrder) => {
                    return <OrderTemplate order={order} key={order?._id} />
                })}
            </ul>
        </section>
    );
};

export default OrderFeed;

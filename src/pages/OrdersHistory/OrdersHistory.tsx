import style from './OrdersHistory.module.css'
import { useAppSelector} from '../../utils/hooks';
import classnames from 'classnames';
import { TOrder } from '../../services/reducers/feed';

const OrdersHistory = () => {
    
    const orders = useAppSelector(state => state.orderHistoryStore?.data?.orders)

    // const legnth: any = orders?.length
    return (
        <section className={style.profile_orders}>
            {/* {legnth > 0
                ? <ul className={classnames(style.orderFeed, 'custom-scroll')}>
                    {orders?.map((order: TOrder) => {
                        return <OrderTemplate order={order} key={order?._id} />
                    })}
                </ul>
                : <h2 className={classnames(style.digit__effect, style.orderTitle, 'text text_type_digits-medium')}>У вас еще нет заказов</h2>
            } */}
        </section>
    );
};

export default OrdersHistory;
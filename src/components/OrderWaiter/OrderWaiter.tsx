import classnames from 'classnames';
import style from './OrderWaiter.module.css'
import {useAppSelector} from '../../utils/hooks';

const OrderWaiter = () => {
    const data = useAppSelector(state => state.feedStore?.data)
    const doneOrders = data?.orders?.filter((order) => order.status === 'done').slice(0, 30);
    const pendingOrders = data?.orders?.filter((order) => order.status === 'pending').slice(0, 30);
    return (
        <section className={style.orderWaiter__container}>
            <div className={style.orders}>
                <div className={style.inProgress}>
                    <h3 className='text text_type_main-medium mb-6'>Готовы:</h3>
                    <ul className={style.inProgress_list}>
                        {doneOrders?.map((order) =>
                            <li className={classnames(style.done, 'text text_type_digits-default')}
                                key={order.number}>{order.number}</li>
                        )}
                    </ul>
                </div>
                <div className={style.inProgress}>
                    <h3 className='text text_type_main-medium mb-6'>В работе:</h3>
                    <ul className={style.inProgress_list}>
                        {pendingOrders?.map((order) =>
                            <li className={`text text_type_digits-default`} key={order.number}>{order.number}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={style.ready_list}>
                <p className='text text_type_main-medium'>Выполнено за все время:</p>
                <p className={classnames(style.digit__effect, 'text text_type_digits-large')}>{data?.total}</p>
            </div>
            <div className={style.ready_list}>
                <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
                <p className={classnames(style.digit__effect, 'text text_type_digits-large')}>{data?.totalToday}</p>
            </div>
        </section>
    );
};

export default OrderWaiter;
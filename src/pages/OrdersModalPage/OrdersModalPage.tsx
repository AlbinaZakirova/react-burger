import  { useMemo, useEffect } from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useLocation, useParams } from 'react-router-dom';
import classnames from 'classnames';
import style from './OrdersModalPage.module.css'
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { dateFormat, dateWhen } from '../../utils/utils'; 
import { wsConnectFeed } from '../../services/actions/feedActions';
import { BURGER_API_WSS_FEED, BURGER_API_WSS_ORDERS } from '../../utils/api';
import { wsConnectOrder } from '../../services/actions/orderHistoryActions';

function inNotUndefined<T>(item: T | undefined): item is T {
  return item !== undefined
}
const OrdersModalPage = () => {
  

  const location = useLocation();
  const isCommonOrders = location.pathname.includes('feed')
  const ingredients = useAppSelector((state) => state.ingredientsStore.data);
  const orders = useAppSelector((state) => isCommonOrders ? state.feedStore?.data?.orders : state.orderHistoryStore?.data?.orders);

  const dispatch = useAppDispatch();

    useEffect(() => {
        if (!orders) {
            isCommonOrders
                ? dispatch(wsConnectFeed({ wsUrl: BURGER_API_WSS_FEED, withTokenRefresh: false }))
                : dispatch(wsConnectOrder({ wsUrl: BURGER_API_WSS_ORDERS, withTokenRefresh: true }))
        }
    }, []);

  const {id} = useParams<{ id: string }>();
  const order = useMemo(() => {
      return orders?.find(order => order._id === id)
  }, [orders, id])
  

  const orderIngredientsForImage = ingredients.filter((ingredient) => order?.ingredients.includes(ingredient._id))

  const orderIngredients =
    order?.ingredients.map(id => {
      return ingredients.find(item => item._id === id);
    }).filter(inNotUndefined);

  const totalOrderPrice = orderIngredients?.reduce(
    (acc, ingredient) => acc + ingredient.price,
      0
  );

  if (!order) {
    return null
  }

  const when = dateWhen(new Date(order.createdAt))
  const currentDate = order!.createdAt.toString()

  return (
    <div className={style.order}>
      <p className='text text_type_digits-default'>#{order?.number}</p>
      <p className={classnames(style.order__title, 'text text_type_main-medium mt-10')}>{order?.name}</p>
      <p className={classnames(style.order__status, 'text text_type_main-default mt-3')}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
      <h3 className={classnames(style.order__title, 'text text_type_main-medium mt-15')}>Состав:</h3>
      <ul className={classnames(style.order__list, 'custom-scroll')}>
          {orderIngredientsForImage!
            .map((item) =>
              <li className={style.order__item} key={item._id}>
                <div className={style.image_container}>
                  <img className={style.order__image} src={item.image_mobile} alt={item.name} />
                  <p className={classnames(style.order__text, 'text_type_main-default')}>{item.name}</p>
                </div>
                <p className={classnames(style.order__price, 'text text_type_digits-default')}>
                  {orderIngredients?.filter(i => i._id === item._id).length} x {item.price} <CurrencyIcon type='primary' />
                </p>
              </li>
          )}
          </ul>
          <div className={`${style.total} mt-10 mb-10`}>
            <p className="text text_type_main-default text_color_inactive">
              {`${when}, ${dateFormat(currentDate)}`}
            </p>
            <div className={`${style.total_price} mt-1 mb-2`}>
              <p className="text text_type_digits-default">{totalOrderPrice}</p>
                <CurrencyIcon type="primary" />
            </div>
          </div>
      </div>
  )
};

export default OrdersModalPage;
import { FC } from 'react';
import style from './OrderTemplate.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../utils/hooks';
import { TOrderTemplate } from '../../utils/types/types';
import { dateFormat, dateWhen } from '../../utils/utils';

function inNotUndefined<T>(item: T | undefined): item is T {
    return item !== undefined
}

const OrderTemplate: FC<TOrderTemplate> = ({ order }) => {
    const location = useLocation()
    const ingredients = useAppSelector(state => state.ingredientsStore.data)
    const orderIngredientsForImage = ingredients.filter((ingredient) => order.ingredients.includes(ingredient._id))
    const orderIngredientsForTotal =
        order.ingredients.map(id => {
            return ingredients.find(item => item._id === id);
        }).filter(inNotUndefined);
    const totalOrderPrice = orderIngredientsForTotal.reduce(
        (acc, ingredient) => acc + ingredient.price,
        0
    );
    const CurrentDate = dateWhen(new Date(order.createdAt))
    const dateFormatCurrent = order.createdAt.toString()
    return (
        <Link to={{ pathname: location.pathname === '/feed' ? `/feed/${order._id}` : `/profile/orders/${order._id}` }} state={{ background: location }} className={style.link}>
            <li className={style.order_container}>
                <div className={style.order_number}>
                    <p className='text text_type_digits-default'>#{order?.number}</p>
                    <p className={style.date}>{`${CurrentDate}, ${dateFormat(dateFormatCurrent)}`}</p>
                </div>
                <h3 className='text text_type_main-medium'>{order?.name}</h3>
                <p className='text text_type_main-default mt-3'>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
                <div className={style.bottom}>
                    <ul className={style.order_images}>
                        {orderIngredientsForImage.map((image) => {
                            return <li className={style.image__container} key={image._id}>
                                <img src={image.image_mobile} className={style.image} alt={image.name} />
                            </li>
                        })}
                    </ul>
                    <div className={style.price}>
                        <p className='text text_type_digits-default'>{totalOrderPrice}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default OrderTemplate;


// import { useMemo } from 'react';
// import style from './OrderModal.module.css'
// import { dateFormat, dateWhen } from '../../../utils/date';
// import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useParams } from 'react-router-dom';
// import { useAppSelector } from '../../utils/types/hooks';
// import classnames from 'classnames'; 

// function inNotUndefined<T>(item: T | undefined): item is T {
//     return item !== undefined
// }
// const OrderModal = () => {
//     const ingredients = useAppSelector((state) => state.burgerIngredient.ingredients);
//     const orders = useAppSelector((state) => state.rootReducer.feedPage.data?.orders);
//     const { id } = useParams<{ id: string }>();
//     const order = useMemo(() => {
//         return orders?.find(order => order._id === id)
//     }, [orders, id])

//     const orderIngredientsForImage = ingredients.filter((ingredient) => order?.ingredients.includes(ingredient._id))

//     const orderIngredients =
//         order?.ingredients.map(id => {
//             return ingredients.find(item => item._id === id);
//         }).filter(inNotUndefined);

//     const totalOrderPrice = orderIngredients?.reduce(
//         (acc, ingredient) => acc + ingredient.price,
//         0
//     );

//     if (!order) {
//         return null
//     }

//     const when = dateWhen(new Date(order.createdAt))
//     const currentDate = order!.createdAt.toString()

//     return (
//         <div className={style.order_info}>
//             <p className='text text_type_digits-default'>#{order?.number}</p>
//             <p className={classnames(style.title, 'text text_type_main-medium mt-10')}>{order?.name}</p>
//             <p className={classnames(style.status, 'text text_type_main-default mt-3')}>{order?.status === 'done' ? 'Выполнен' : 'Готовится'}</p>
//             <h3 className={classnames(style.title, 'text text_type_main-medium mt-15')}>Состав:</h3>
//             <ul className={classnames(style.list, 'custom-scroll')}>
//                 {orderIngredientsForImage!
//                     .map((item) =>
//                         <li className={style.item} key={item._id}>
//                             <div className={style.image_container}>
//                                 <img className={style.image} src={item.image_mobile} alt={item.name} />
//                                 <p className={classnames(style.text, 'text_type_main-default')}>{item.name}</p>
//                             </div>
//                             <p className={classnames(style.price, 'text text_type_digits-default')}>
//                                 {orderIngredients?.filter(i => i._id === item._id).length} x {item.price} <CurrencyIcon type='primary' />
//                             </p>
//                         </li>
//                     )}

//             </ul>
//             <div className={`${style.total} mt-10 mb-10`}>
//                 <p className="text text_type_main-default text_color_inactive">
//                     {`${when}, ${dateFormat(currentDate)}`}
//                 </p>
//                 <div className={`${style.total_price} mt-1 mb-2`}>
//                     <p className="text text_type_digits-default">{totalOrderPrice}</p>
//                     <CurrencyIcon type="primary" />
//                 </div>
//             </div>
//         </div>
//     )
// };

// export default OrderModal;

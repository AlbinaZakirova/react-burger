// import style from './OrderFeed.module.css'
// import OrderTemplate from '../OrderTemplate/OrderTemplate';
// import { useAppSelector } from '../../utils/types/hooks';
// import { TOrder } from '../../../services/features/reducers/feedPage/reducer';
// import classnames from 'classnames'; 


// const OrderFeed = () => {
//     const orders = useAppSelector(state => state.rootReducer.feedPage.data?.orders)
//     return (
//         <section className={style.container}>
//             <h2 className='text text_type_main-large mb-5'>Лента заказов</h2>
//             <ul  className={classnames(style.orderFeed, 'custom-scroll')}>
//                 {orders?.map((order: TOrder) => {
//                     return <OrderTemplate order={order} key={order?._id} />
//                 })}
//             </ul>
//         </section>
//     );
// };

// export default OrderFeed;
// import style from './OrdersPage.module.css'
// import { useLocation } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../../utils/types/hooks';
// import { getCookie } from '../API/cookies';
// import { logoutUser } from '../services/features/UserSlice';
// import { TOrder } from '../services/features/reducers/feedPage/reducer';
// import OrderTemplate from '../../components/OrderTemplate/OrderTemplate';
// import classnames from 'classnames';  

// const OrdersPage = () => {
//     const dispatch = useAppDispatch()
//     const inactiveClassName = `${style.link} ${style.profilelink} text text_type_main-medium text_color_inactive`
//     const activeClassName = `${style.link} ${style.profilelink} ${style.active} text text_type_main-medium` 
//     const token = getCookie('refreshToken')
//     const RequestBody = {
//         'token': token
//     }

//     const logout = (RequestBody: any) => {
//         dispatch(logoutUser(RequestBody))
//     }

//     const orders = useAppSelector(state => state.rootReducer.orderPage.data?.orders)
    
//     const legnth: any = orders?.length
//     return (
//         <section className={style.profile_orders}>
//             {legnth > 0
//                 ? <ul className={classnames(style.orderFeed, 'custom-scroll')}>
//                     {orders?.map((order: TOrder) => {
//                         return <OrderTemplate order={order} key={order?._id} />
//                     })}
//                 </ul>
//                 : <h2 className={classnames(style.digit__effect, style.orderTitle, 'text text_type_digits-medium')}>У вас еще нет заказов</h2>
//             }
//         </section>
//     );
// };

// export default OrdersPage;
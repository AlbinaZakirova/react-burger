import {useEffect} from 'react';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import classnames from 'classnames';
import style from './Profile.module.css';
import ProfileHome from './ProfileHome/ProfileHome';
import {exitUser, getUserData} from '../../services/reducers/user';
import {useAppDispatch, useAppSelector} from '../../utils/hooks';
import {isObjEmpty} from '../../utils/utils';
import OrdersHistory from './OrdersHistory/OrdersHistory';

const Profile = () => {

    const dispatch = useAppDispatch();
    const location = useLocation()
    const navigate = useNavigate();

    const {user, isExited} = useAppSelector(state => state.userStore);

    useEffect(() => {
        isObjEmpty(user) && dispatch(getUserData())
    }, [user])

    useEffect(() => {
        isExited && navigate('/login')
    }, [isExited])

    const {pathname} = useLocation();

    const activeClasses = classnames(style.list__item, style.active, 'text text_type_main-medium text_color_inactive mb-6')
    const inactiveClasses = classnames(style.list__item, 'text text_type_main-medium text_color_inactive mb-6')

    const logoutHandler = () => {
        dispatch(exitUser())
    }

    return (
        <div className={style.loginContainer}>
            <div className="mr-15">
                <nav className={style.list}>
                    <NavLink className={({isActive}) => isActive ? activeClasses : inactiveClasses} to='/profile'
                             end>Профиль</NavLink>
                    <NavLink className={({isActive}) => isActive ? activeClasses : inactiveClasses} to='/profile/orders'
                             end>История заказов</NavLink>
                    <button
                        className={classnames(style.list__item, style.list__button, 'text text_type_main-medium text_color_inactive mb-6')}
                        onClick={logoutHandler}>Выход
                    </button>
                </nav>
                {location.pathname === '/profile' &&
                    <span className={classnames(style.list__span, 'text text_type_main-default text_color_inactive')}>
                    В этом разделе вы можете<br/>изменить свои персональные данные
                </span>}
            </div>
            {pathname === '/profile'
                ? <ProfileHome/>
                : <OrdersHistory/>
            }
        </div>
    )
}

export default Profile; 
 


 
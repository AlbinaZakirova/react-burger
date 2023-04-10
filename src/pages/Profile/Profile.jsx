import classnames from 'classnames';
import style from './Profile.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import ProfileHome from './ProfileHome/ProfileHome';
import { useDispatch } from 'react-redux';

const Profile = () => {

  const dispatch = useDispatch();

  const {pathname} = useLocation();

  const activeClasses = classnames(style.list__item, style.active, 'text text_type_main-medium text_color_inactive mb-6')
  const inactiveClasses = classnames(style.list__item, 'text text_type_main-medium text_color_inactive mb-6')

  return (
    <div className={style.loginContainer}>
      <div className="mr-15">
        <nav className={style.list}>
          <NavLink className={({isActive}) => isActive ? activeClasses : inactiveClasses} to='/profile' end>Профиль</NavLink>
          <NavLink className={({isActive}) => isActive ? activeClasses : inactiveClasses} to='/profile/orders' end>История заказов</NavLink>
          <button className={classnames(style.list__item, style.list__button,'text text_type_main-medium text_color_inactive mb-6')} >Выход</button>
        </nav>
        <span className={classnames(style.list__span,'text text_type_main-default text_color_inactive')} >
          В этом разделе вы можете<br />изменить свои персональные данные
        </span>
        
      </div>
      {pathname === '/profile'
        ? <ProfileHome/>
        : <></>
      }
    </div>
  )
}

export default Profile;
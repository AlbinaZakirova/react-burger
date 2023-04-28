import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import { ListIcon, BurgerIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons"; 
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components"
import style from './AppHeader.module.css';

const AppHeader = () => {
  return (
    <header className={classnames(style.header, 'pt-4', 'pb-4')}>
      <nav className={style.nav}>
        <div className={classnames(style.header__column, style.link__column)}>
          <NavLink to="/" className={classnames(style.link, style.link_active)}>
            <BurgerIcon type="primary" />
              <span className='text text_type_main-default ml-2'>Конструктор</span>
          </NavLink>
          <NavLink to="feed" className={classnames(style.link)}>
            <ListIcon type="secondary" />
              <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
          </NavLink>
        </div>
        <div className={classnames(style.header__column, style.logo)}> 
          <Logo />
        </div>
        <NavLink
            to="/profile"
            className={classnames(style.header__link, style.header__linkProfile, 'text text_type_main-default text_color_inactive ml-2')}
          >
            <ProfileIcon type="secondary"/>
            Личный кабинет
          </NavLink>
      </nav>
    </header>
  )
}

export default AppHeader;
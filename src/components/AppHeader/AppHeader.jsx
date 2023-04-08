import classnames from 'classnames';
import { ListIcon, BurgerIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons"; 
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components"
import style from './AppHeader.module.css';
import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className={classnames(style.header, 'pt-4', 'pb-4')}>
      <nav className={style.nav}>
        <div className={classnames(style.header__column, style.link__column)}>
          <a href="#" className={classnames(style.link, style.link_active)}>
            <BurgerIcon type="primary" />
              <span className='text text_type_main-default ml-2'>Конструктор</span>
          </a>
          <a href="#" className={classnames(style.link)}>
            <ListIcon type="secondary" />
              <span className='text text_type_main-default text_color_inactive ml-2'>Лента заказов</span>
          </a>
        </div>
        <div className={classnames(style.header__column, style.logo)}>
          <Logo />
        </div>
        <div className={classnames(style.header__column, style.header__profile)}>
          <a href="#" className={classnames(style.link, style.link_active)}>
            <ProfileIcon type="secondary" />
            <Link to="/profile" className={classnames(style.header__link, 'text text_type_main-default text_color_inactive ml-2')}>Личный кабинет</Link>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader;
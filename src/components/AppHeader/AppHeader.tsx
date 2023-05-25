import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {Logo} from "@ya.praktikum/react-developer-burger-ui-components"
import style from './AppHeader.module.css';
import NavLinkHeader from "../NavLinkHeader/NavLinkHeader";

const AppHeader = () => {
    return (
        <header className={classnames(style.header, 'pt-4', 'pb-4')}>
            <nav className={style.nav}>
                <div className={classnames(style.header__column, style.link__column)}>
                    <NavLinkHeader icon={'burger'} text={'Конструктор'} to={'/'}/>
                    <NavLinkHeader icon={'list'} text={'Лента заказов'} to={'/feed'}/>
                </div>
                <Link
                    className={classnames(style.header__column, style.logo)}
                    to={'/'}
                >
                    <Logo/>
                </Link>
                <NavLinkHeader icon={'profile'} text={'Личный кабинет'} to={'/profile'}/>
            </nav>
        </header>
    )
}

export default AppHeader;
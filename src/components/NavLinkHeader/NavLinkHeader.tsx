import style from './NavLinkHeader.module.scss'
import {ListIcon, BurgerIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons";
import {NavLink} from "react-router-dom";
import {FC} from "react";
import {TNavLinkHeader} from "../../utils/types/types";

const NavLinkHeader: FC<TNavLinkHeader> = ({icon, text, to}) => {
    const spanClasses = 'text text_type_main-default ml-2'

    return (
        <NavLink to={to} className={style.link}>
            {({isActive}) =>
                <>
                    {icon === 'burger'
                        ? <BurgerIcon type={isActive ? "primary" : "secondary"}/>
                        : icon === 'list'
                            ? <ListIcon type={isActive ? "primary" : "secondary"}/>
                            : <ProfileIcon type={isActive ? "primary" : "secondary"}/>
                    }
                    <span className={`${style.link__text} ${isActive ? style.link__text_active : ''} ${spanClasses}`}>
                        {text}
                    </span>
                </>
            }
        </NavLink>
    )
}

export default NavLinkHeader;
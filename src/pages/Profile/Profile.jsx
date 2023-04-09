import classnames from 'classnames';
import style from './Profile.module.css';
import { EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

const Profile = ({value}) => {
  return (
    <div className={style.loginContainer}>
      <div className="mr-15">
        <nav className={style.list}>
          <NavLink className={classnames(style.list__item,'text text_type_main-medium mb-6')} to='/profile' >Профиль</NavLink>
          <NavLink className={classnames(style.list__item,'text text_type_main-medium text_color_inactive mb-6')} to='/profile/orders'>История заказов</NavLink>
          <button className={classnames(style.list__item, style.list__button,'text text_type_main-medium text_color_inactive mb-6')} >Выход</button>
        </nav>
        <span className={classnames(style.list__span,'text text_type_main-default text_color_inactive')} >
          В этом разделе вы можете<br />изменить свои персональные данные
        </span>
      </div>
      {/* <form onSubmit={onSubmit} className="loginForm"> */}
      <form className="loginForm">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            // onChange={handleChange}
            // icon={'CurrencyIcon'}
            value={value}
            name={'name'}
            error={false}
            // ref={inputRef}
            // onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
            icon="EditIcon"
          />
          <EmailInput
            // onChange={handleChange}
            value={value}
            name={'email'}
            isIcon={false}
            extraClass="mb-6"
            icon="EditIcon"
          />
          <PasswordInput
            // onChange={handleChange}
            value={value}
            name={'password'}
            icon="EditIcon"
          />
        </div>
      </form>
    </div>
  )
}

export default Profile;
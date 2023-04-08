import { Link } from 'react-router-dom';
import classnames from 'classnames';
import style from './ResetPassword.module.css';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


const ResetPassword = ({value}) => {
  return (
    <div className={style.loginContainer}>
      {/* <form onSubmit={onSubmit} className="loginForm"> */}
      <form className="loginForm">
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Восстановление пароля</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PasswordInput
            // onChange={handleChange}
            value={value}
            name={'password'}
            extraClass="mb-2"
            placeholder={'Введите новый пароль'}
          />

          <Input
            type={'text'}
            placeholder={'Введите код из письма'}
            // onChange={handleChange}
            // icon={'CurrencyIcon'}
            value={value}
            name={'code'}
            error={false}
            // ref={inputRef}
            // onIconClick={onIconClick}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-2"
          />
          
          <div className={style.login__button}>
            <Button 
              htmlType="submit" 
              size="medium">
                Сохранить
            </Button>
          </div>
        </div>

        <div className={style.login_signupContainer}>
          <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span>
          <Link to="/login" className={classnames(style.login__link, "text text_type_main-default")}>Войти</Link>
        </div>

      </form>
    </div>
  )
}

export default ResetPassword;
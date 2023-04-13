import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import style from './ForgotPassword.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../services/reducers/user';


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const {isUserForgotPassword} = useSelector(state => state.userStore);

  const handleChange = (e) => 
  setEmail(e.target.value)

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email))
  }

  useEffect (() => {
    isUserForgotPassword && navigate('/reset-password')
  },[isUserForgotPassword])


  return (
    <div className={style.loginContainer}>
      <form className="loginForm" onSubmit={resetPasswordHandler}>
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Восстановление пароля</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <EmailInput
            onChange={handleChange}
            value={email}
            name={'email'}
            isIcon={false}
            extraClass="mb-2"
            placeholder={'Укажите e-mail'}
          />
          
          <div className={style.login__button}>
            <Button 
              htmlType="submit" 
              size="medium">
                Восстановить
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

export default ForgotPassword; 


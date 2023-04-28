import { useState, ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import classnames from 'classnames';
import style from './Login.module.css';
import { signInUser } from '../../services/reducers/user';
import { useAppDispatch } from '../../utils/hooks';

const Login = () => {
  
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }); 
  }

  const handleSubmit = (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return null;
    }
    dispatch(signInUser(userData))
  }

  return (
    <div className={style.loginContainer}>
      <form onSubmit={handleSubmit} className="loginForm">
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Вход</p>
        <div className={style.login__block}>
          <EmailInput
            onChange={(e) => handleChange(e)}
            value={userData.email}
            name={'email'}
            isIcon={false}
            extraClass="mb-2"
          />
          <PasswordInput
            onChange={(e) => handleChange(e)}
            value={userData.password}
            name={'password'}
            extraClass="mb-2"
          />
          <div className={style.login__button}>
            <Button 
              htmlType="submit" 
              size="medium">
                Войти
            </Button>
          </div>
        </div>

        <div className={style.login_signupContainer}>
          <span className="text text_type_main-default text_color_inactive">Вы — новый пользователь?</span>
          <Link to="/register" className={classnames(style.login__link, "text text_type_main-default")}>Зарегистрироваться</Link>
        </div>

        <div className={style.login_signupContainer}>
          <span className="text text_type_main-default text_color_inactive">Забыли пароль?</span>
          <Link to="/forgot-password" className={classnames(style.login__link, "text text_type_main-default")}>Восстановить пароль</Link>
        </div>
      </form>
    </div>
  )
}

export default Login; 
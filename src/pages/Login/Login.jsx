import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classnames from 'classnames';
import style from './Login.module.css';
import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../../services/reducers/user';


const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const {isLogin} = useSelector(state => state.userStore);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return null;
    }
    dispatch(signInUser(userData))
  }

  useEffect(() => {
    isLogin && navigate('/')
  }, [isLogin])

  return (
    <div className={style.loginContainer}>
      <form onSubmit={handleSubmit} className="loginForm">
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Вход</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
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
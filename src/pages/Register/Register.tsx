import { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import classnames from 'classnames';
import style from './Register.module.css';
import { registerUser } from '../../services/reducers/user';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

const Registration = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isRegistered} = useAppSelector(state => state.userStore);
  
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const handleSubmit = (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(userData)); 
  }

  useEffect(() => {
    isRegistered && navigate('/') 
  }, [isRegistered])

  return (
    <div className={style.loginContainer}>
      <form className="loginForm" onSubmit={(e) => handleSubmit(e)}>
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Регистрация</p>
        <div className={style.login__block}>
          <Input
            id="username"
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => handleChange(e)}
            value={userData.name}
            name={'name'}
            error={false}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-2"
          />
          <EmailInput
            id="email"
            onChange={handleChange}
            value={userData.email}
            name={'email'}
            isIcon={false}
            extraClass="mb-2"
          />
          <PasswordInput
            id="password"
            onChange={handleChange}
            value={userData.password}
            name={'password'}
            extraClass="mb-2"
          />
          
          <div className={style.login__button}>
            <Button 
              htmlType="submit" 
              size="medium">
                Зарегистрироваться
            </Button>
          </div>
        </div>

        <div className={style.login_signupContainer}>
          <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span>
          <Link to="/login" className={classnames(style.login__link, "text text_type_main-default")}>Войти</Link>
        </div>
      </form>
    </div>
  )
}

export default Registration;  
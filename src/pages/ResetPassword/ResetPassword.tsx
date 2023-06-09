import { ChangeEvent, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import classnames from 'classnames';
import style from './ResetPassword.module.css';
import { recoveryPassword } from '../../utils/api';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [resetData, setresetData] = useState( {
    password: '',
    token: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setresetData({
      ...resetData,
      [name]: value
    }); 
  }

  const onSubmit = (e: FormEvent <HTMLFormElement>) => {
    e.preventDefault();
    recoveryPassword(resetData)
      .then((res) => res.success && navigate('/login'))
      .catch(err => console.log(`Ошибка${err}`))
  }

  return (
    <div className={style.loginContainer}>
      <form onSubmit={onSubmit} className="loginForm">
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Восстановление пароля</p>
        <div className={style.login__block}>
          <Input
            placeholder={'Введите код из письма'} 
            onChange={(e) => handleChange(e)}
            value={resetData.token}
            name={'token'}
            extraClass="mb-2"
          />
          <PasswordInput
            onChange={(e) => handleChange(e)}
            value={resetData.password}
            name={'password'}
            extraClass="mb-2"
            placeholder={'Введите новый пароль'}
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
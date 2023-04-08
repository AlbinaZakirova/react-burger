
// import { Link } from 'react-router-dom';
// import classnames from 'classnames';
// import style from './Register.module.css';
// import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


// const Registration = ({value}) => {
//   return (
//     <div className={style.loginContainer}>
//       {/* <form onSubmit={onSubmit} className="loginForm"> */}
//       <form className="loginForm">
//         <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Регистрация</p>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <Input
//             type={'text'}
//             placeholder={'Имя'}
//             // onChange={handleChange}
//             // icon={'CurrencyIcon'}
//             value={value}
//             name={'name'}
//             error={false}
//             // ref={inputRef}
//             // onIconClick={onIconClick}
//             errorText={'Ошибка'}
//             size={'default'}
//             extraClass="mb-2"
//           />
//           <EmailInput
//             // onChange={handleChange}
//             value={value}
//             name={'email'}
//             isIcon={false}
//             extraClass="mb-2"
//           />
//           <PasswordInput
//             // onChange={handleChange}
//             value={value}
//             name={'password'}
//             extraClass="mb-2"
//           />
//           <div className={style.login__button}>
//             <Button 
//               htmlType="submit" 
//               size="medium">
//                 Зарегистрироваться
//             </Button>
//           </div>
//         </div>

//         <div className={style.login_signupContainer}>
//           <span className="text text_type_main-default text_color_inactive">Уже зарегистрированы?</span>
//           <Link to="/login" className={classnames(style.login__link, "text text_type_main-default")}>Войти</Link>
//         </div>

//       </form>
//     </div>
//   )
// }

// export default Registration; 

import { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import style from './Register.module.css';
import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';


const Registration = ({onRegister}) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(userData)
  }


  return (
    <div className={style.loginContainer}>
     
      <form className="loginForm" onSubmit={handleSubmit}>
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Регистрация</p>
        <p className="register__error">{message}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Input
            id="username"
            type={'text'}
            placeholder={'Имя'}
            onChange={handleChange}
            // icon={'CurrencyIcon'}
            value={userData.name}
            name={'name'}
            error={false}
            // ref={inputRef}
            // onIconClick={onIconClick}
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
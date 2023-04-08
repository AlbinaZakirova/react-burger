import { Link } from 'react-router-dom';
import classnames from 'classnames';
import style from './ForgotPassword.module.css';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';


const ForgotPassword = ({value}) => {
  
  return (
    <div className={style.loginContainer}>
      {/* <form onSubmit={onSubmit} className="loginForm"> */}
      <form className="loginForm">
        <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Восстановление пароля</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <EmailInput
            // onChange={handleChange}
            value={value}
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




// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import classnames from 'classnames';
// import style from './ForgotPassword.module.css';
// import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import { GET_USER_NEW_PASSWORD_INIT, getUserNewPassword } from '../../services/reducers/user/user';



// const initialFormState = {
//   email: ''
// }

// const ForgotPassword = () => {

//   const {setNewPassword} = useSelector(store => store.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [formValues, setFormValue] = useState(initialFormState);
//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(getUserNewPassword(formValues))
//   }

//   useEffect(() => {
//     console.log(setNewPassword);
//     if (setNewPassword) {
//       setTimeout(() => {
//         dispatch({type: GET_USER_NEW_PASSWORD_INIT});
//         navigate('/reset-password', {state: {from: location}});
//       }, 3000);
//     }
//   }, [dispatch, setNewPassword]);
//   const onChange = (e) => {
//     setFormValue({...formValues, [e.target.name]: e.target.value});
//   }
  
//   return (
//     <div className={style.loginContainer}>
//       <form onSubmit={onSubmit} className="loginForm">
//         <p className={classnames(style.login__title, 'text text_type_main-medium mb-6')}>Восстановление пароля</p>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <EmailInput
//             onChange={(e) => {onChange(e)}}
//             value={formValues.email}
//             name={'email'}
//             isIcon={false}
//             extraClass="mb-2"
//             placeholder={'Укажите e-mail'}
//           />
          
//           <div className={style.login__button}>
//             <Button 
//               htmlType="submit" 
//               size="medium">
//                 Восстановить
//             </Button>
//           </div>
//         </div>

//         <div className={style.login_signupContainer}>
//           <span className="text text_type_main-default text_color_inactive">Вспомнили пароль?</span>
//           <Link to="/login" className={classnames(style.login__link, "text text_type_main-default")}>Войти</Link>
//         </div>

//       </form>
//     </div>
//   )
// }

// export default ForgotPassword; 
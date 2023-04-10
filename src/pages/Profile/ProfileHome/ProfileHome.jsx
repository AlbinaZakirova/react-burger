import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import classnames from "classnames";
import style from "./ProfileHome.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const ProfileHome = () => {
  const {user} = useSelector(state => state.userStore)

  const [userData, setUserData] = useState( {
    email: user?.email,
    name: user?.name,
    password: user?.password,
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }); 
  }

  return (
    <form className={style.loginForm}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => handleChange(e)}
          // icon={'CurrencyIcon'}
          value={userData.name}
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
          onChange={(e) => handleChange(e)}
          value={userData.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
          icon="EditIcon"
        />
        <PasswordInput
          onChange={(e) => handleChange(e)}
          value={userData.password}
          name={'password'}
          icon="EditIcon"
        />
      </div>
      <div className='mt-6'>
        <Button type="secondary" size="medium" htmlType="reset" extraClass="pr-7">Отмена</Button>
        <Button type="primary" size="medium" htmlType="submit">Сохранить</Button>
        <Button type="primary" size="medium" htmlType="submit" disabled>Сохранить</Button>
      </div>
    </form>
  )
}

export default ProfileHome
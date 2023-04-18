import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ProfileHome.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from 'react';
import { updateUserData } from "../../../services/reducers/user";

const ProfileHome = () => {

  const dispatch = useDispatch();

  const {user, isUserDataGot} = useSelector(state => state.userStore)

  const [isButtonsShow, setIsButtonsShow] = useState(false)

  const changeTracking = () => {
    const isChanged = user && Object.entries(user).every(field => userData[field[0]] === field[1])
    setIsButtonsShow(!isChanged);
  }

  const [userData, setUserData] = useState( {
    email: user?.email,
    name: user?.name,
  })

  useEffect(() => {
    changeTracking()
  }, [userData])

  useEffect(() => {
    isUserDataGot && setUserData({email: user?.email, name: user?.name})
  }, [isUserDataGot])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }); 
  }

  const saveHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserData(userData));
  }

  const cancelHandler = () => {
    setUserData({...user})
  }

  return (
    <form className={style.loginForm}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => handleChange(e)}
          value={userData?.name || ''}
          name={'name'}
          error={false}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
          icon="EditIcon"
        />
        <EmailInput
          onChange={(e) => handleChange(e)}
          value={userData?.email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
          icon="EditIcon"
        />
        <PasswordInput
          onChange={(e) => handleChange(e)}
          value={userData?.password || ''}
          name={'password'}
          icon="EditIcon"
        />
      </div>
      <div className= {'mt-6'}>
        {isButtonsShow &&
          <>
            <Button type="secondary" size="medium" htmlType="reset" extraClass="pr-7" onClick={cancelHandler}>Отмена</Button>
            <Button type="primary" size="medium" htmlType="submit" onClick={saveHandler}>Сохранить</Button>
          </>
        }
      </div>
    </form>
  )
}

export default ProfileHome;
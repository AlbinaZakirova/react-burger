import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ProfileHome.module.css";
import { ChangeEvent, useState } from "react";
import { useEffect } from 'react';
import { updateUserData } from "../../../services/reducers/user";
import { useAppDispatch, useAppSelector } from "../../../utils/types/hooks";

const ProfileHome = () => {

  const dispatch = useAppDispatch();

  const {user, isUserDataGot} = useAppSelector(state => state.userStore)

  const [isButtonsShow, setIsButtonsShow] = useState(false)

  const changeTracking = () => {
    const isChanged = user && Object.entries(user).every(field => userData[field[0]] === field[1])
    setIsButtonsShow(!isChanged);
  }

  const [userData, setUserData] = useState( {
    email: user?.email,
    name: user?.name,
    password: user?.password,
  })

  useEffect(() => {
    changeTracking()
  }, [userData])

  useEffect(() => {
    isUserDataGot && setUserData({email: user?.email, name: user?.name})
  }, [isUserDataGot])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }); 
  }

  const saveHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(updateUserData(userData)); 
    setIsButtonsShow(false);
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
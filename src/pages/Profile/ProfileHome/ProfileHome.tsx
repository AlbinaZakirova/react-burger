import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ProfileHome.module.css";
import { ChangeEvent, useState, SyntheticEvent, FC } from "react";
import { useEffect } from 'react';
import { updateUserData } from "../../../services/reducers/user";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";


const ProfileHome: FC = () => {

  const dispatch = useAppDispatch();
  
  const {user, isUserDataGot} = useAppSelector(state => state.userStore)

  const [isButtonsShow, setIsButtonsShow] = useState(false)

  const changeTracking = () => {
    const isChanged = JSON.stringify(user) === JSON.stringify(userData)
    setIsButtonsShow(!isChanged);
  }


  const [userData, setUserData] = useState({
    email: user?.email,
    name: user?.name,
    
  })
  
  useEffect(() => {
    changeTracking()
  }, [userData])

  useEffect(() => {
    isUserDataGot && setUserData({email: user?.email, name: user?.name})
  }, [isUserDataGot])

  const handleChange = (e: ChangeEvent  <HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    }); 
  }

  const saveHandler = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    dispatch(updateUserData(userData)); 
    setIsButtonsShow(false);
  }

  const cancelHandler = () => {
    if (user) {
      setUserData({email: user?.email, name: user?.name});
    }
  };

  return (
    <form className={style.loginForm}>
      <div className={style.profile__block}> 
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
        />
        <EmailInput
          onChange={(e) => handleChange(e)}
          value={userData?.email || ''}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => handleChange(e)}
          value={''}
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
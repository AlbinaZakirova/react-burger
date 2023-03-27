
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import { getIngredients } from '../../utils/api';
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './App.module.css';
import { fetchIngredients } from '../../services/reducers/ingredients';
import { useDispatch } from 'react-redux/es/exports';


export const App = () => {

    
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(fetchIngredients());
    }, [dispatch]);
    return (
        <div className={style.app}>
            <AppHeader />
            <h1 className={classnames(style.app__title, 'text text_type_main-large mt-10 mb-5')}>Соберите бургер</h1>
            <main className={style.main}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </div>
    )
} 
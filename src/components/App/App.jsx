import { useEffect } from 'react';
import AppHeader from "../AppHeader/AppHeader";
import style from './App.module.css';
import { fetchIngredients } from '../../services/reducers/ingredients';
import { useDispatch } from 'react-redux/es/exports';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import MainPage from '../MainPage/MainPage';
import Registration from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import IngredientsIdPage from '../../pages/IngredientsIdPage/IngredientsIdPage';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);



  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
          <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Registration} />
            <Route path="/forgot-password" Component={ForgotPassword} />
            <Route path="/reset-password" Component={ResetPassword} />
            <Route path="/profile/orders" Component={Profile} />
            <Route path="/profile" Component={Profile} />
            <Route path="/ingredients/:id" Component={IngredientsIdPage} />
            <Route path="/" Component={MainPage} />
          </Routes>
      </div>
    </Router>
  );
}  
 
import { useEffect } from 'react';
import classnames from 'classnames';
import AppHeader from "../AppHeader/AppHeader";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import style from './App.module.css';
import { fetchIngredients } from '../../services/reducers/ingredients';
import { useDispatch } from 'react-redux/es/exports';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import MainPage from '../MainPage/MainPage';
import Registration from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';


export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  // const location = useLocation();
  // const state = location.state;

  return (
    <Router>
      <div className={style.app}>
        <AppHeader />
        
        <Routes>
            <Route path="/" Component={MainPage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Registration} />
            <Route path="/forgot-password" Component={ForgotPassword} />
            <Route path="/reset-password" Component={ResetPassword} />
            <Route path="/profile" Component={Profile} />
            {/* <Route path="/ingredients/:id" Component={IngredientsId} /> */}
          </Routes>
      </div>
    </Router>
  );
}  
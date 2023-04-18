import { useEffect } from 'react';
import AppHeader from "../AppHeader/AppHeader";
import style from './App.module.css';
import { fetchIngredients } from '../../services/reducers/ingredients';
import { useDispatch } from 'react-redux/es/exports';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import NotFound from "../../pages/NotFound/NotFound";
import MainPage from '../../pages/MainPage/MainPage';


export const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state?.background;
  
  const handleCloseModal = () => {
    navigate(background.pathname || "/", { replace: true });
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <AppHeader />
        <Routes location={background || location}>
          <Route path="/login" element={<ProtectedRoute > <Login /> </ProtectedRoute> } />
          <Route path="/register" element={<ProtectedRoute > <Registration /> </ProtectedRoute> } />
          <Route path="/forgot-password" element={<ProtectedRoute > <ForgotPassword /> </ProtectedRoute> } />
          <Route path="/reset-password" element={<ProtectedRoute > <ResetPassword /> </ProtectedRoute> } />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile/orders" element={<ProtectedRoute isForAuthUser> <Profile /> </ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute isForAuthUser> <Profile /> </ProtectedRoute>} />
          <Route path="/ingredient/:idIngredient" element={<ProtectedRoute isForAuthUser><IngredientDetails /> </ProtectedRoute> } />
          <Route path="/" element={<ProtectedRoute ><MainPage /></ProtectedRoute>} />
          
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {background && (
        <Routes>
          <Route
            path="/ingredient/:idIngredient"
            element={
              <ProtectedRoute isForAuthUser>
                <Modal onClose={handleCloseModal}>
                <IngredientDetails />
                </Modal>
              </ProtectedRoute>
            }
          />
        </Routes>
        )} 
    </div>
  );
}  
 


import {useEffect} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import AppHeader from "../AppHeader/AppHeader";
import style from './App.module.css';
import {fetchIngredients} from '../../services/reducers/ingredients';
import Login from '../../pages/Login/Login';
import Registration from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';
import ResetPassword from '../../pages/ResetPassword/ResetPassword';
import Profile from '../../pages/Profile/Profile';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import {ProtectedRoute} from '../ProtectedRoute/ProtectedRoute';
import NotFound from "../../pages/NotFound/NotFound";
import MainPage from '../../pages/MainPage/MainPage';
import { useAppDispatch } from '../../utils/hooks';
import FeedPage from '../../pages/FeedPage/FeedPage';
import FeedModalPage from '../../pages/FeedModalPage/FeedModalPage';
import HistoryModalPage from '../../pages/HistoryModalPage/HistoryModalPage';
import IngredientsIdPage from '../../pages/IngredientsIdPage/IngredientsIdPage';
import OrderTemplate from '../OrderTemplate/OrderTemplate';

export const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state?.background;

  const handleCloseModal = () => {
    navigate(background.pathname || "/", {replace: true});
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={style.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/login" element={<ProtectedRoute isForNotAuthUser> <Login/> </ProtectedRoute>}/>
        <Route path="/register" element={<ProtectedRoute isForNotAuthUser> <Registration/> </ProtectedRoute>}/>
        <Route path="/forgot-password" element={<ProtectedRoute isForNotAuthUser> <ForgotPassword/> </ProtectedRoute>}/>
        <Route path="/reset-password" element={<ProtectedRoute isForNotAuthUser> <ResetPassword/> </ProtectedRoute>}/>
        <Route path='/profile/orders/:id' element={<ProtectedRoute><HistoryModalPage /></ProtectedRoute>} />
        <Route path='/profile/orders' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute ><Profile/></ProtectedRoute>}/>
        <Route path="/ingredient/:idIngredient" element={<IngredientsIdPage/>}/>
        <Route path='feed/:id' element={<FeedModalPage />}/>
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/" element={<MainPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/ingredient/:idIngredient"
            element={
              <Modal onClose={handleCloseModal}>
                <IngredientDetails/>
              </Modal>
            }
          />
          <Route 
            path='feed/:id' 
            element={
              <Modal onClose={handleCloseModal}>
                <FeedModalPage />
             </Modal>
            } 
          />
          <Route 
            path='profile/orders/:id' 
            element={
              <Modal onClose={handleCloseModal}>
                <HistoryModalPage />
              </Modal>
            } 
          />
        </Routes>
      )}
    </div>
  );
}   
 
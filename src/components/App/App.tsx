import {useEffect} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import style from './App.module.css';
import {fetchIngredients} from '../../services/reducers/ingredients';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
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
// import FeedPage from '../../pages/FeedPage/FeedPage';
// import OrderModal from '../OrderModal/OrderModal';
import OrdersHistory from '../../pages/OrdersHistory/OrdersHistory';
import { wsConnectFeed, wsDisconnectFeed } from '../../services/actions/feedActions';
import { wsConnectOrder, wsDisconnectOrder } from '../../services/actions/orderHistoryActions';
import { BURGER_API_WSS_FEED, BURGER_API_WSS_ORDERS } from '../../utils/api';

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

  useEffect(() => {
    dispatch(wsConnectFeed({ wsUrl: BURGER_API_WSS_FEED, withTokenRefresh: false }))
    dispatch(wsConnectOrder({ wsUrl: BURGER_API_WSS_ORDERS, withTokenRefresh: true }))
    return () => {
      dispatch(wsDisconnectFeed())
      dispatch(wsDisconnectOrder())
    }
  }, []);

  return (
    <div className={style.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/login" element={<ProtectedRoute isForNotAuthUser> <Login/> </ProtectedRoute>}/>
        <Route path="/register" element={<ProtectedRoute isForNotAuthUser> <Registration/> </ProtectedRoute>}/>
        <Route path="/forgot-password" element={<ProtectedRoute isForNotAuthUser> <ForgotPassword/> </ProtectedRoute>}/>
        <Route path="/reset-password" element={<ProtectedRoute isForNotAuthUser> <ResetPassword/> </ProtectedRoute>}/>
        {/* <Route path='/profile/orders/:id' element={<ProtectedRoute><OrderModal /></ProtectedRoute>} /> */}
        <Route path='/profile/orders' element={<ProtectedRoute><OrdersHistory /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute ><Profile/></ProtectedRoute>}/>
        <Route path="/ingredient/:idIngredient" element={<IngredientDetails/>}/>
        {/* <Route path='feed/:id' element={<OrderModal />} /> */}
        {/* <Route path="/feed" element={<FeedPage />} /> */}
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
          {/* <Route 
            path='feed/:id' 
            element={
              <Modal onClose={handleCloseModal}>
                <OrderModal />
             </Modal>
            } 
          /> */}
          {/* <Route 
            path='profile/orders/:id' 
            element={
             <Modal onClose={handleCloseModal}>
                <OrderModal />
              </Modal>
            } 
          /> */}
        </Routes>
      )}
    </div>
  );
}   
 


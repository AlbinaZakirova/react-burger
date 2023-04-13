import { useSelector } from 'react-redux';
import { Navigate, useLocation } from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";

export const ProtectedRoute = ({ isForAuthUser, children }) => {
    const location = useLocation();
    const {user, isAuth, isUserForgotPassword} = useSelector(state => state.userStore)
    
    
    if (isAuth && isForAuthUser) {
        return children
      }
    
      if (isAuth && !isForAuthUser) {
        return <NotFound/>
      }

      if (!isAuth && isForAuthUser) {
        return <Navigate replace to={{ pathname: "/login" }} state={{ from: location }} />
      }

      if (!isAuth && !isForAuthUser) {
        if (location.pathname === '/reset-password') {
          return isUserForgotPassword ? children : <NotFound/>
        }
        return children
      }

    return children;

}
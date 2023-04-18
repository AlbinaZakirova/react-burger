import {useSelector} from 'react-redux';
import {Navigate, useLocation} from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {checkAuthorization} from "../../services/reducers/user";

export const ProtectedRoute = ({isForNotAuthUser, children}) => {
  const dispatch = useDispatch();
  dispatch(checkAuthorization());

  const location = useLocation();
  const {isAuth, isUserForgotPassword} = useSelector(state => state.userStore)

  if (isForNotAuthUser && isAuth) {
    const {from} = location.state || {from: {pathname: '/'}}
    const {background} = location.state?.from?.state || {background: null};
    return <Navigate replace to={from} state={{background}}/>;
  }

  if (!isForNotAuthUser && !isAuth) {
    return <Navigate replace to={{pathname: "/login"}} state={{from: location}}/>
  }

  if (isForNotAuthUser && !isAuth ) {
    if (location.pathname === '/reset-password') {
      return isUserForgotPassword ? children : <NotFound/>
    }
    return children
  }
  
  return children;
}

import { Navigate, useLocation} from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import {useDispatch} from "react-redux/es/hooks/useDispatch";
import {checkAuthorization} from "../../services/reducers/user";
import { TProtectedRoute } from '../../utils/types/types';
import { useAppSelector } from '../../utils/types/hooks';

  export const ProtectedRoute = ({ isForNotAuthUser, children }: TProtectedRoute): JSX.Element | null => {
  const dispatch = useDispatch();
  dispatch(checkAuthorization());

  const location = useLocation();
  const {isAuth, isUserForgotPassword} = useAppSelector(state => state.userStore)

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
      return isUserForgotPassword ? <>{children}</> : <NotFound/>
    }
    return <>{children}</>
  }
  
  return <>{children}</>; 
}
import { Dispatch, ReactNode, ReactElement } from "react"
import { TOrder } from "../../services/reducers/feed";

export type TDataUser = {
  email?: string;
  name?: string;
  password?: string;
}

export type TUserState = {
  user: TDataUser | null;
  isAuth: boolean | false;
  isLogin: boolean | null;
  isRegistered: boolean | null;
  isExited: boolean | null;
  isTokenUpdated: boolean | null;
  isUserDataGot: boolean | null;
  isUserDataUpdated: boolean | null;
  isUserForgotPassword: boolean | null; 
}

export type TIngredientType = {
  __v: number,
  _id: string,
  name: string,
  price: number,
  proteins: number,
  fat: number,
  carbohydrates: number,
  calories: number,
  image: string,
  image_mobile: string,
  image_large: string,
  type: string,
  id?: string,
  uuid: string | undefined,
}

export type TBurgerIngredient = {
  ingredient: TIngredientType,
  onClick: () => void;
};

export type TProtectedRoute = {
  isForNotAuthUser?: boolean,
  children?: ReactNode
}

export type TModal = {
  onClose: () => void,
  children: ReactElement
}

export type TConstructorElementWrap = {
  ingredient: TIngredientType,
  removeIngredientBurger?: (uuid: string | undefined) => void,
  id?: string | undefined,
  index?: number,
  isHover?: boolean,
  text?: string
}

export type TIngredientState = {
  data: Array<TIngredientType>;
  isLoading: boolean;
  error: any;
}

export type TOrderState = {
  orderData: any | null;
  isLoading: boolean;
  error: any;
}

export type TErrorResponse = {
  message: string;
  statusCode?: number;
}

export type wsPayloadConnect = {
  wsUrl: string;
  withTokenRefresh: boolean
}

export type TOptionsDate = {
  timezone: 'Moscow',
  hour: 'numeric',
  minute: 'numeric',
  timeZoneName: "short",
}

export type TOrderTemplate = {
  order: TOrder;
}

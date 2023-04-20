import { Dispatch, ReactNode, ReactElement } from "react"

export type TUserState = {
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
  uuid?: string | undefined,
}

export type TBurgerIngredient = {
  ingredient: TIngredientType,
  onClick: () => void;
};

export type TProtectedRoute = {
  isForNotAuthUser?: any,
  children?: ReactElement,
  isAuth?:boolean
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
  isHover?: boolean
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


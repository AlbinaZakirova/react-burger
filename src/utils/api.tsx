import {getItemByKey} from "./localStorage";

export interface ILoginUser {
  email?: string;
  name?: string;
  password?: string;
  other?: any;
}

export interface IUpdateUser {
  email?: string;
  password?: number;
}

const checkResponse = (res:Response) => {
  return res.ok ? res.json() : res.json().then((err: string) => Promise.reject(err))
}

const API_URL = 'https://norma.nomoreparties.space/api';
export const BURGER_API_WSS_ORDERS = `wss://norma.nomoreparties.space/orders`;
export const BURGER_API_WSS_FEED = "wss://norma.nomoreparties.space/orders/all";

type TRequestProps = (
  endpoint: string,
  options?: RequestInit,
) => any;

const request: TRequestProps = async (endpoint, options) =>
  await fetch(`${API_URL}/${endpoint}`, options)
    .then(checkResponse)

export const getIngredients = async () =>
  await request('ingredients')
    .then((res:any) => {
      if (res.success) {
        return res.data
      }
    })

export const makeOrder = async (ingredientIds:any) =>
  await request('orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: getItemByKey('accessToken')
    },
    body: JSON.stringify({
      ingredients: ingredientIds
    })
  })
    .then((res:any) => {
      if (res.success) {
        return res
      }
    })

export const resetPassword = async (email: string,) =>
  await request('password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email
    })
  });

export const recoveryPassword = async (data: ILoginUser) =>
  await request('password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(
      data
    )
  });

export const registrationUser = async (data: ILoginUser) =>
  await request('auth/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })

export const loginUser = async (data: ILoginUser) =>
  await request('auth/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })

export const updateToken = async () =>
  await request('auth/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({token: getItemByKey('refreshToken')}),
  })

export const logoutUser = async (token: string) =>
  await request('auth/logout', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({token: token}),
  })

export const getUser = async () =>
  await request('auth/user', {
    method: "GET",
    headers: {
      authorization: getItemByKey('accessToken')
    }
  })

export const updateUser = async (userData: IUpdateUser) =>
  await request('auth/user', {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      authorization: getItemByKey('accessToken')
    },
    body: JSON.stringify({...userData})
  })
 
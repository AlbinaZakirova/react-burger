// import { getCookie, setCookie } from './cookies';


const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err))
}

const API_URL = 'https://norma.nomoreparties.space/api';

const request = async (endpoint, options) =>
  await fetch(`${API_URL}/${endpoint}`, options)
    .then(checkResponse)

export const getIngredients = async () =>
  await request('ingredients')
    .then(res => {
      if (res.success) {
        return res.data
      }
    })

export const makeOrder = async ingredientIds =>
  await request('orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ingredients: ingredientIds
    })
  })
  .then(res => {
    if (res.success) {
      return res
    }
  }) 

export const resetPassword = async email =>   
  await request('password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email
    })
  });


export const recoveryPassword = async email =>   
  await request('password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      email
    })
  });



export const registrationUser = async (data) =>   //РЕГИСТРАЦИЯ
  await request ('auth/register', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
      body: JSON.stringify(data),
  })
  

export const loginUser = async (data) =>   //РЕГИСТРАЦИЯ
  await request ('auth/login', {
   method: "POST",
   headers: {
     "Content-Type": "application/json;charset=utf-8",
   },
     body: JSON.stringify(data),
 })
 


// export const getUser = () => {  //ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ
//   return this.fetchWithRefresh(`${API_URL}/auth/user`, {
//       headers: {
//           authorization: getCookie("accessToken"),
//       },
//   }).then(data => {
//       if (data?.success) return data;
//       return Promise.reject(data)
//   });
// }


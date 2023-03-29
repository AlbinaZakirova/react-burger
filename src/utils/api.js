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
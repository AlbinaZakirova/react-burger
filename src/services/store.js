import { configureStore } from '@reduxjs/toolkit'
import constructor from './reducers/constructor';
import currentIngredient from './reducers/currentIngredient';
import ingredients from './reducers/ingredients';
import order from './reducers/order';
import user from "./reducers/user";


export const store = configureStore({
  reducer: {
    ingredientsStore: ingredients,
    constructorStore: constructor,
    currentIngredientStore: currentIngredient,
    orderStore: order,
    userStore: user
  },
})

export default store;
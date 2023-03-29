import { configureStore } from '@reduxjs/toolkit'
import constructor from './reducers/constructor';
import currentIngredient from './reducers/currentIngredient';
import ingredients from './reducers/ingredients';
import order from './reducers/order';


export const store = configureStore({
  reducer: {
    ingredientsStore: ingredients,
    constructorStore: constructor,
    currentIngredientStore: currentIngredient,
    orderStore: order
  },
})

export default store;
import { configureStore } from '@reduxjs/toolkit'
import constructor from './reducers/constructor';
import ingredients from './reducers/ingredients';


export const store = configureStore({
  reducer: {
    ingredientsStore: ingredients,
    constructorStore: constructor,
    // currentIngredientStore: currentIngredient,
    // orderStore: order
  },
})

export default store;
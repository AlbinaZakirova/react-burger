import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  currentIngredient: null
}

const currentIngredient = createSlice({
  name: 'currentIngredient',
  initialState,
  reducers: {
    setCurrentIngredient(state, action) {
      state.currentIngredient = action.payload;
    },
    removeCurrentIngredient(state, _) {
      state.currentIngredient = null;
    }
  },
});

export const {setCurrentIngredient, removeCurrentIngredient} = currentIngredient.actions;
export default currentIngredient.reducer;   

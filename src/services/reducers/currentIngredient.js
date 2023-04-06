import {createSlice} from '@reduxjs/toolkit';

const currentIngredient = createSlice({
  name: 'currentIngredient',
  initialState: {
    currentIngredient: null,
  },
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
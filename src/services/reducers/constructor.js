import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  bun: null,
  ingredients: [],
}

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addConstructor: (state, action) => {
      console.log(action.payload)
      if (action.payload.type === 'bun') {
          state.bun = {...action.payload, uuid: uuidv4()};
      }
        else {
          state.ingredients.push({...action.payload, uuid: uuidv4()})
      }
      
    }
  }
})

export const { addConstructor } = constructorSlice.actions;
export default constructorSlice.reducer;



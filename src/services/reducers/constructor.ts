import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

interface IIngredient {
  _id?: string;
  id?: string;
  name: string;
  type: string;
  image: string;
  price: number;
  uuid?: string;
}

interface IBun { 
  _id?: string;
  id: string;
  name: string;
  type: string;
  image: string;
  price: number;
  uuid?: string;
}


interface IState {
  bun: IBun | undefined | null | IIngredient;
  ingredients: IIngredient[];
}



export const initialState:IState = {
  bun: null,
  ingredients: [],
}

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    addConstructor: (state, action) => {
      if (action.payload.type === 'bun') {
        state.bun = {...action.payload, uuid: uuidv4()};
      }
        else {
          state.ingredients.push({...action.payload, uuid: uuidv4()})
      }
    }, 

    removeConstructor: (state, action) => {
      state.ingredients = state.ingredients.filter(ingredient => ingredient.uuid !== action.payload)
    },
    
    clearConstructor: (state) => {
      state.bun = null;
      state.ingredients = [];
    },


    moveElement: (state, action) => {
      let res: IIngredient[] = [...state.ingredients]
      let start = action.payload[0]
      let end = action.payload[1]
      if (start === end) {
        return state
      } else if (start > end) {
          res = [
            ...state.ingredients.slice(0, end),
            state.ingredients[start],
            ...state.ingredients.slice(end, start),
            ...state.ingredients.slice(start + 1)
          ];
      } else if (start < end) {
          res = [
            ...state.ingredients.slice(0, start),
            ...state.ingredients.slice(start + 1, end + 1),
            state.ingredients[start],
            ...state.ingredients.slice(end + 1)
          ]
      }
      return {
          bun: state.bun,
          ingredients: res
      }
    }
  }
})

export const { addConstructor, removeConstructor, clearConstructor, moveElement } = constructorSlice.actions;
export default constructorSlice.reducer;   
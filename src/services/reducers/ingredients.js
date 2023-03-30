import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" 
import { getIngredients } from "../../utils/api";

const initialState = {
  data:[],
  isLoading: false,
  error: null
}

export const fetchIngredients = createAsyncThunk (
  'ingredients/fetchIngredients',
  async (_, { dispatch, getState, rejectWithValue}) => {
    try {
      const data = await getIngredients();
      if (!Array.isArray(data)) {
        throw new Error({ message: 'Ошибка в получении данных', statusCode: 404})
      }
      return data;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({ message: 'Ошибка на стороне сервера' })
    }
  }
)

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  },
})

export default ingredientSlice.reducer;

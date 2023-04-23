import { createAsyncThunk, createSlice } from "@reduxjs/toolkit" 
import { getIngredients } from "../../utils/api";
import { TErrorResponse, TIngredientState, TIngredientType } from "../../utils/types/types";

const initialState: TIngredientState = {
  data:[],
  isLoading: false,
  error: null
}

export const fetchIngredients = createAsyncThunk (
  'ingredients/fetchIngredients',
  async (_, {rejectWithValue}) => {
    try {
      const data = await getIngredients();
      if (!Array.isArray(data)) {
        throw new Error('Ошибка в получении данных')
      }
      return data;
    } catch (error) {
      const err = error as TErrorResponse;
      if (err.statusCode) {
        return rejectWithValue(err);
      }
      return rejectWithValue({ message: 'Ошибка на стороне сервера' })
    }
  }
)

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
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
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {makeOrder} from "../../utils/api";

const initialState = {
  orderData: null,
  isLoading: false,
  error: null
}

export const sendOrder = createAsyncThunk(
  'order/makeOrder',
  async (orderIds, {dispatch, getState, rejectWithValue}) => {
    try {
      const res = await makeOrder(orderIds);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      return res;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.orderData = action.payload;
        state.isLoading = false;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
  }
})

export default orderSlice.reducer
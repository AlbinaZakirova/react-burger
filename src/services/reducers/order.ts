import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {makeOrder} from "../../utils/api";
import { TErrorResponse, TOrderState } from "../../utils/types/types";

const initialState: TOrderState = {
  orderData: null,
  isLoading: false,
  error: null
}

export const sendOrder = createAsyncThunk(
  'order/makeOrder',
  async (orderIds:any[], {rejectWithValue}) => {
    try {
      const res = await makeOrder(orderIds);
      if (!res) {
        throw new Error('Ошибка в получении данных')
      }
      return res;
    } catch (error) {
      const err = error as TErrorResponse;
      if (err.statusCode) {
        return rejectWithValue(err);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
)


export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
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

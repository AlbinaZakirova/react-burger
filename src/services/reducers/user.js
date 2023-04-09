import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginUser, logoutUser, registrationUser} from "../../utils/api";
import { deletItemByKey, setItemByKey } from "../../utils/localStorage";


const sliceName = 'user'

const initialState = {
  user: null,
  success: null,
}

export const registerUser = createAsyncThunk(
  `${sliceName}/registerUser`,
  async (dataUser, {rejectWithValue}) => {
    try {
      const res = await registrationUser(dataUser);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      setItemByKey('accessToken', res.accessToken)
      setItemByKey('refreshToken', res.refreshToken)
      return res;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
);


export const signInUser = createAsyncThunk(
  `${sliceName}/loginUser`,
  async (dataUser, {rejectWithValue}) => {
    try {
      const res = await loginUser(dataUser);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      setItemByKey('accessToken', res.accessToken)
      setItemByKey('refreshToken', res.refreshToken)
      return res;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
);

export const exitUser = createAsyncThunk(
  `${sliceName}/logoutUser`,
  async (dataUser, {rejectWithValue}) => {
    try {
      const res = await logoutUser(dataUser);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      deletItemByKey('accessToken', res.accessToken)
      deletItemByKey('refreshToken', res.refreshToken)
      return res;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
);

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.success = action.payload.success;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.success = action.payload.success;
      })
      .addCase(exitUser.fulfilled, (state, action) => {
        state.user = null;
        state.success = action.payload.success;
      })
  }
})

export default userSlice.reducer
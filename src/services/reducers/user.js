import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginUser, logoutUser, registrationUser, updateToken} from "../../utils/api";
import {deleteItemByKey, setItemByKey } from "../../utils/localStorage";


const sliceName = 'user'

const initialState = {
  user: null,
  isLogin: null,
  isRegistred: null,
  isExited: null,
  isTokenUpdated: null
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
      return {...res, password: dataUser.password};
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
  async (token, {rejectWithValue}) => {
    try {
      const res = await logoutUser(token);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      deleteItemByKey('accessToken')
      deleteItemByKey('refreshToken')
      return res;
    } catch (error) {
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
);

export const updateAccessToken = createAsyncThunk(
  `${sliceName}/updateAccessToken`,
  async (refreshToken, {rejectWithValue}) => {
    try {
      const res = await updateToken(refreshToken);
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
);

export const userSlice = createSlice({
  name: sliceName,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistred = action.payload.success;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = {...action.payload.user, password: action.payload.password};
        state.isLogin = action.payload.success;
      })
      .addCase(exitUser.fulfilled, (state, action) => {
        state.user = null;
        state.isExited = action.payload.success;
      })
      .addCase(updateAccessToken.fulfilled, (state, action) => {
        setItemByKey('refreshToken', action.payload.refreshToken)
        setItemByKey('accessToken', action.payload.accessToken)
        state.isTokenUpdated = action.payload.success;
      })
  }
})

export default userSlice.reducer


import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  getUser,
  loginUser,
  logoutUser,
  registrationUser,
  resetPassword,
  updateToken,
  updateUser
} from "../../utils/api";
import {deleteItemByKey, getItemByKey, setItemByKey} from "../../utils/localStorage";


const sliceName = 'user'

const initialState = {
  user: null,
  isAuth: false,
  isLogin: null,
  isRegistered: null,
  isExited: null,
  isTokenUpdated: null,
  isUserDataGot: null,
  isUserDataUpdated: null,
  isUserForgotPassword: null
}

export const forgotPassword = createAsyncThunk(
  `${sliceName}/forgotPassword`,
  async (email, {rejectWithValue}) => {
    try {
      const res = await resetPassword(email);
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
  async (_, {rejectWithValue}) => {
    try {
      const res = await logoutUser(getItemByKey('refreshToken'));
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
  async (_, {rejectWithValue}) => {
    try {
      const res = await updateToken();
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

export const getUserData = createAsyncThunk(
  `${sliceName}/getUserData`,
  async (_, {rejectWithValue, dispatch}) => {
    try {
      const res = await getUser();
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      return res;
    } catch (error) {
      if (error.message === 'jwt expired') {
        dispatch(updateAccessToken())
        dispatch(getUserData())
      }
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
)

export const updateUserData = createAsyncThunk(
  `${sliceName}/updateUserData`,
  async (userData, {rejectWithValue, dispatch}) => {
    try {
      const res = await updateUser(userData);
      if (!res) {
        throw new Error({message: 'Ошибка в получении данных', statusCode: 404})
      }
      return res;
    } catch (error) {
      if (error.message === 'jwt expired') {
        dispatch(updateAccessToken())
        dispatch(updateUserData(userData))
      }
      if (error.statusCode) {
        return rejectWithValue(error);
      }
      return rejectWithValue({message: 'Ошибка на стороне сервера'})
    }
  }
)


export const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    checkAuthorization: (state) => {
      state.isAuth = !!getItemByKey('accessToken')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistered = action.payload.success;
        state.isAuth = true;
      })
      .addCase(signInUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLogin = action.payload.success;
        state.isAuth = true;
      })
      .addCase(exitUser.fulfilled, (state, action) => {
        state.user = null;
        state.isExited = action.payload.success;
        state.isAuth = false;
      })
      .addCase(updateAccessToken.fulfilled, (state, action) => {
        setItemByKey('refreshToken', action.payload.refreshToken)
        setItemByKey('accessToken', action.payload.accessToken)
        state.isTokenUpdated = action.payload.success;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isUserDataGot = action.payload.success;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isUserDataUpdated = action.payload.success;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isUserForgotPassword = action.payload.success;
      })
  }
})

export const {checkAuthorization} = userSlice.actions

export default userSlice.reducer;

 
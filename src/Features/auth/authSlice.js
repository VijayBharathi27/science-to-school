import { createSlice } from '@reduxjs/toolkit';
import { Login, Register } from './services';

// const initialState = {
//   isLoggedIn: true,
//   isLoding: false,
//   user: { name: 'Gautam', username: 'gv890', initial: 'mr.', mobile: '+91 877', userType: 'professor' },
//   error: null,
// };

const initialState = {
  isLoggedIn: false,
  isLoding: false,
  error: null,
  user: { name: '', username: '', initial: '', mobile: '', userType: '' },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    }
  },
  extraReducers: {
    [Login.pending]: (state) => {
      state.isLoding = true;
    },
    [Register.pending]: (state) => {
      state.isLoding = true;
    },
    [Login.rejected]: (state, action) => {
      state.isLoding = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [Register.rejected]: (state, action) => {
      state.isLoding = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [Register.fulfilled]: (state, action) => {
      if (action.payload.status == 200) {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isLoding = false;
        state.error = null;
      }
      else {
        state.error = action.payload;
        state.isLoding = false;
      }
    },
    [Login.fulfilled]: (state, action) => {
      if (action.payload.status == 200) {
        state.user = action.payload.data.user;
        state.isLoggedIn = true;
        state.isLoding = false;
        state.error = null;
      }
      else {
        state.error = action.payload;
        state.isLoding = false;
      }
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

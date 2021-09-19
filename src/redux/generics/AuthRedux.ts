import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@redux/store';

interface AuthState {
  access_token?: string;
  refresh_token?: string;
  username?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, { payload }: PayloadAction<string>) => {
      state.access_token = payload;
    },
    setRefreshToken: (state, { payload }: PayloadAction<string>) => {
      state.refresh_token = payload;
    },
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    logout: (state) => {
      state.username = undefined;
      state.access_token = undefined;
      state.refresh_token = undefined;
    },
  },
});

export const selectAuth = (state: RootState) => state.auth;
export const selectIsLoggedIn = (state: RootState) => Boolean(state.auth.refresh_token);
export const authActions = authSlice.actions;
export default authSlice.reducer;

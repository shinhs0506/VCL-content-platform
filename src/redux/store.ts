import { configureStore } from '@reduxjs/toolkit';

// Generic reducer imports go here
import accessControllerReducer from './generics/AccessControllerRedux';
import authReducer from './generics/AuthRedux';
// Component/Page reducer imports go here

export const store = configureStore({
  reducer: {
    accessController: accessControllerReducer,
    auth: authReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
// reducer imports go here
import accessControllerReducer from "@components/AccessController/redux"

export const store = configureStore({
  reducer: {
    accessController: accessControllerReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

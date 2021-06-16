import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";

interface AccessControllerState {
  user: "default" | "member" | "manager";
}

const initialState: AccessControllerState = {
  user: "default",
};

export const accessControllerSlice = createSlice({
  name: "accessController",
  initialState,
  reducers: {
    setUserType: (
      state,
      { payload }: PayloadAction<{ user: "default" | "member" | "manager" }>
    ) => {
      state.user = payload.user;
    },
  },
});

export const selectAccessController = (state: RootState) =>
  state.accessController;
export const accessControllerActions = accessControllerSlice.actions;
export default accessControllerSlice.reducer;

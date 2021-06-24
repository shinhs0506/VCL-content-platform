import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@redux/store";

type userType = "default" | "member" | "manager";

interface AccessControllerState {
  user: userType;
}

const initialState: AccessControllerState = {
  user: "default",
};

export const accessControllerSlice = createSlice({
  name: "accessController",
  initialState,
  reducers: {
    setUserType: (state, { payload }: PayloadAction<{ user: userType }>) => {
      state.user = payload.user;
    },
  },
});

export const selectAccessController = (state: RootState) =>
  state.accessController;
export const accessControllerActions = accessControllerSlice.actions;
export default accessControllerSlice.reducer;

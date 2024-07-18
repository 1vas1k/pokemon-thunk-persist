import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInProgress {
  inProgress: boolean;
}

const initialState: IInProgress = {
  inProgress: false,
};

const inProgressSlice = createSlice({
  name: "catchingProgress",
  initialState,
  reducers: {
    setInProgress: (state, action: PayloadAction<boolean>) => {
      state.inProgress = action.payload;
    },
  },
});

export const { setInProgress } = inProgressSlice.actions;
export default inProgressSlice.reducer;

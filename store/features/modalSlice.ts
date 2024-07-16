import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModal {
  isModalActive: boolean;
}

const initialState: IModal = {
  isModalActive: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModalActive: (state, action: PayloadAction<boolean>) => {
      state.isModalActive = action.payload;
    },
  },
});

export const { setIsModalActive } = modalSlice.actions;
export default modalSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICatchedPokemon {
  image: string;
  name: string;
  id: string;
}

const initialState: ICatchedPokemon[] = [];

const catchSlice = createSlice({
  name: "catching",
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<ICatchedPokemon>) => {
      state.push(action.payload);
    },
    freePokemon: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { catchPokemon, freePokemon } = catchSlice.actions;
export default catchSlice.reducer;

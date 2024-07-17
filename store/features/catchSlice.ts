import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICatchedPokemon {
  image: string;
  name: string;
  //   id: number;
}

const initialState: ICatchedPokemon[] = [];

const catchSlice = createSlice({
  name: "catch",
  initialState,
  reducers: {
    catchPokemon: (state, action: PayloadAction<ICatchedPokemon>) => {
      state.push(action.payload);
    },
    // freePokemon: (state, action: PayloadAction<number>) => {
    //   return state.filter((pokemon) => pokemon.id !== action.payload);
    // },
  },
});

export const {
  catchPokemon,
  // freePokemon
} = catchSlice.actions;
export default catchSlice.reducer;

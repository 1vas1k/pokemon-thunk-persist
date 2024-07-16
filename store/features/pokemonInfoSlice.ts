import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPokemonInfo = createAsyncThunk(
  "infp/getPokemonInfo",
  async (pokemonName: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!response) {
        throw new Error("Network response was not ok");
      }
      const data = await response.data;
      const resultData = {
        image: response.data.sprites.front_default,
        name: response.data.forms[0].name,
        id: response.data.id,
        types: response.data.types.map((item: any) => {
          return item.type.name;
        }),
        height: response.data.height,
        weight: response.data.weight,
        baseExp: response.data.base_experience,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        specialAttack: response.data.stats[3].base_stat,
        specialDefense: response.data.stats[4].base_stat,
      };
      //   console.log(resultData);
      return resultData;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
export interface IInfo {
  isLoading: boolean;
  image: string;
  name: string;
  id: number;
  types: string[];
  height: number;
  weight: number;
  baseExp: number;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  specialAttack: number;
  specialDefense: number;
}

const initialState: IInfo = {
  isLoading: false,
  image: "",
  name: "name",
  id: 0,
  types: [],
  height: 0,
  weight: 0,
  baseExp: 0,
  hp: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  specialAttack: 0,
  specialDefense: 0,
};
// satisfies IInfo as IInfo;

const pokemonInfoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonInfo.fulfilled, (state, { payload }) => {
      state.image = payload.image;
      state.id = payload.id;
      state.name = payload.name;
      state.types = payload.types;
      state.height = payload.height;
      state.weight = payload.weight;
      state.baseExp = payload.baseExp;
      state.hp = payload.hp;
      state.attack = payload.attack;
      state.defense = payload.defense;
      state.speed = payload.specialAttack;
      state.specialAttack = payload.specialAttack;
      state.specialDefense = payload.specialDefense;
      state.isLoading = false;
    });
    builder.addCase(getPokemonInfo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default pokemonInfoSlice.reducer;

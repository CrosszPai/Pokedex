import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { pokemon } from "../type";

const pokemonsSlice = createSlice<Array<pokemon>, SliceCaseReducers<Array<pokemon>>>({
    name: "pokemons",
    initialState: [],
    reducers: {
        set: (state, action: PayloadAction<Array<pokemon>>) => action.payload
    }
})

export default pokemonsSlice
export const setPokemon = pokemonsSlice.actions.set
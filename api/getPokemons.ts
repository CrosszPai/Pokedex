import { pokemon } from "../store/type";

export const getPokemon = async (limit = 10, offset = 0) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    return await res.json() as Array<pokemon>
}
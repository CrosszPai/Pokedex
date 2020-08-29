import { pokemon } from "../store/type";

export const getPokemon = async (limit = 2, offset = 1) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    return (await res.json()).results as Array<pokemon>
}
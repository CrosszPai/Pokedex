import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getPokemon } from '../api/getPokemons'
import { setPokemon } from './slices/pokemonSlice';
import { increment, decrement, reset } from './slices/counterSlice';
import { setLoading, setError, setIdle } from './slices/networkSlice';
import { generationToLimit } from '../helper';

export default function* rootSaga() {
    yield takeEvery(increment, apiSaga)
    yield takeEvery(decrement, apiSaga)
    yield takeEvery(reset, apiSaga)
}

export function* apiSaga() {
    yield put(setLoading())
    let generation = yield select(state => state.counter)
    let [start, stop] = generationToLimit(generation)

    try {
        const pk = yield call(getPokemon, stop - start + 1, start - 1)
        yield put(setPokemon(pk.results))
        yield put(setIdle())
    } catch (error) {
        console.log(error);
        
        yield put(setError(error))
        yield put(setIdle())
    }
}
import { createSlice, configureStore, Store, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import counterSlice, { reset } from './slices/counterSlice'
import pokemonsSlice from './slices/pokemonSlice'
import networkSlice from './slices/networkSlice'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonsSlice.reducer,
        network: networkSlice.reducer
    },
    middleware: getDefaultMiddleware(
        { thunk: false, immutableCheck: false }
    ).concat(sagaMiddleware),
    devTools:true
})
sagaMiddleware.run(rootSaga)

export type RootStore = ReturnType<typeof store.getState>
export default store
store.dispatch(reset())
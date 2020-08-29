import { apiSaga } from "../store/saga";
import sinon from 'sinon'
import * as api from "../api/getPokemons";
import { takeEvery, take, put } from "redux-saga/effects";
import { increment } from "../store/slices/counterSlice";
import { setLoading, setIdle } from "../store/slices/networkSlice";
import { runSaga } from "redux-saga";
import { Action } from "redux";


describe('api call', () => {
    const genObj = apiSaga()
    it('step 1',()=>{
        expect(genObj.next().value)
        .toEqual(put(setLoading()))
    })
})
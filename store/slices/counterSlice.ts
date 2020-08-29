import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        increment: state => {
            if (state < 5)
                return state + 1
            else
                return state
        },
        decrement: state => {
            if (state > 2)
                return state - 1
            else
                return state
        },
        set: (state, action: { type: string, payload: number }) => action.payload,
        reset: () => 1
    },
})
export default counterSlice
export const { increment, decrement, reset, set } = counterSlice.actions
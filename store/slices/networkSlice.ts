import { createSlice } from "@reduxjs/toolkit";

const networkSlice = createSlice({
    name: 'network',
    initialState: {
        progress: 'IDLE',
        error: null
    },
    reducers: {
        setIdle: (state) => { state.progress = 'IDLE' },
        setLoading: (state) => { state.progress = 'LOADING' },
        setError: (state, action) => {
            state.progress = 'ERROR'
            state.error = action.payload
        }
    }
})

export default networkSlice
export const { setError, setIdle, setLoading } = networkSlice.actions
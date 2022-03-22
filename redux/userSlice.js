import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../api/api';

export const getUser = createAsyncThunk('user/', async (email, password) => {
    return fetch("https://micity-backend.herokuapp.com/signin",{
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password}),
    }).then((res) => res.json())
});


const userSlice = createSlice(({
    name: 'user',
    initialState: {
        user: {},
        loading: false
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.loading = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}));

export default userSlice.reducer;

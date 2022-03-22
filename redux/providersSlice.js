import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getProviders = createAsyncThunk('providers/', async (_id) => {
    return fetch(`https://micity-backend.herokuapp.com/services/${_id}`).then((res) => res.json()); 
});

const providersSlice = createSlice(({
    name: 'providers',
    initialState: {
        providers: [],
        loading: false
    },
    extraReducers: {
        [getProviders.pending]: (state, action) => {
            state.loading = true;
        },
        [getProviders.fulfilled]: (state, action) => {
            state.loading = false;
            state.providers = action.payload;
        },
        [getProviders.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}));

export default providersSlice.reducer;

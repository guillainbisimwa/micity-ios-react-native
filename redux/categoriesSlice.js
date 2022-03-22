import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getCategories = createAsyncThunk('categories/', async () => {
    return fetch("https://micity-backend.herokuapp.com/categories").then((res) => {
        return res.json()
    }); 
});

const categoriesSlice = createSlice(({
    name: 'categories',
    initialState: {
        categories: [],
        loading: false
    },
    extraReducers: {
        [getCategories.pending]: (state, action) => {
            state.loading = true;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}));

export default categoriesSlice.reducer;

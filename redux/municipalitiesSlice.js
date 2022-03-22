import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getMunicipalities = createAsyncThunk('municipalities/', async () => {
    return fetch(`https://micity-backend.herokuapp.com/municipalities`).then((res) => res.json()); 
});

const municipalitiesSlice = createSlice(({
    name: 'municipalities',
    initialState: {
        municipalities: [],
        loading: false
    },
    extraReducers: {
        [getMunicipalities.pending]: (state, action) => {
            state.loading = true;
        },
        [getMunicipalities.fulfilled]: (state, action) => {
            state.loading = false;
            state.municipalities = action.payload;
        },
        [getMunicipalities.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}));

export default municipalitiesSlice.reducer;

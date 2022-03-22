import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRegister = createAsyncThunk('register/', async (
    name,
    email,
    phone,
    password,
    type,
    status,
    province,
    city,
    address
) => {
    return fetch("https://micity-backend.herokuapp.com/register",{
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password, name: name, phone: phone,
        type: type, status: status, province: province, city: city, address: address}),
    }).then((res) => res.json())
});


const registerSlice = createSlice(({
    name: 'register',
    initialState: {
        register: {},
        loading: false
    },
    extraReducers: {
        [getRegister.pending]: (state, action) => {
            state.loading = true;
        },
        [getRegister.fulfilled]: (state, action) => {
            state.loading = false;
            state.register = action.payload;
        },
        [getRegister.rejected]: (state, action) => {
            state.loading = false;
        },
    }
}));

export default registerSlice.reducer;

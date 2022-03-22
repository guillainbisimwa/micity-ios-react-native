import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllProviders = createAsyncThunk('allProviders/', async () => {
    return fetch(`https://micity-backend.herokuapp.com/services/`).then((res) => res.json()); 
});

// const storeData = async (providersList=[]) => {
//     try {
//         await AsyncStorage.setItem('@providersList', JSON.stringify(providersList))
//     } catch (e) {
//       // saving error
//       console.log('error');
//     }
// }

// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@providersList');
//         if(value !== null ) {
//             // value previously stored
//             return JSON.parse(value)
//         }
      
//     } catch(e) {
//       // error reading value
//       console.log('error', e);
//     }  
// }

const allProvidersSlice = createSlice(({
    name: 'allProviders',
    initialState: {
        allProviders: [],
        loadingAll: false
    },
    extraReducers: {
        [getAllProviders.pending]: (state, action) => {
            state.loadingAll = true;
        },
        [getAllProviders.fulfilled]: (state, action) => {
            state.loadingAll = false;
            state.allProviders = action.payload;
            // storeData(action.payload);
        },
        [getAllProviders.rejected]: (state, action) => {
            state.loadingAll = false;
        },
    }
}));

export default allProvidersSlice.reducer;

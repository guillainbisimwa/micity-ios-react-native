import { configureStore } from "@reduxjs/toolkit";
import allProvidersSlice from "./allProvidersSlice";
import categoriesSlice from "./categoriesSlice";
import municipalitiesSlice from "./municipalitiesSlice";
import providersSlice from "./providersSlice";
import registerSlice from "./registerSlice";
import userSlice from "./userSlice";

export default configureStore({
    reducer: {
        user: userSlice,
        categories: categoriesSlice,
        providers: providersSlice,
        register: registerSlice,
        municipalities: municipalitiesSlice,
        allProviders: allProvidersSlice
    },
});

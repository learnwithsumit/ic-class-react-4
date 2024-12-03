import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

// lets create our own middleware
// const myLogger = (store) => (next) => (action) => {
//     console.log(`Action: ${JSON.stringify(action)}`);
//     console.log(`Current State: ${JSON.stringify(store.getState())}`);
//     return next(action);
// };

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;

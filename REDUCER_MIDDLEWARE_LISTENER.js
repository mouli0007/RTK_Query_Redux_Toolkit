###### Connect to Store API #### REDUCER  MIDDLEWARE LISTENER ######

import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./slices/usersSlice";

// RTK Query Imports
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
  reducer: {
    
    // Some Random Slice !
    
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(albumsApi.middleware);
  },
});

setupListeners(store.dispatch);

// import { configureStore } from "@reduxjs/toolkit";
// import { productsReducer } from "./productsSlice";
// import { filterReducer } from "./filterReducer.js";

// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//     filter: filterReducer,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./operations";
import { filterReducer } from "./filterReducer.js";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);

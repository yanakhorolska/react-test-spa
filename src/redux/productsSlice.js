// import { createSlice } from "@reduxjs/toolkit";
// import { fetchProducts } from "./operations";

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     items: "",
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchProducts.pending](state, action) {
//       state.isLoading = true;
//     },
//     [fetchProducts.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [fetchProducts.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const productsReducer = productsSlice.reducer;

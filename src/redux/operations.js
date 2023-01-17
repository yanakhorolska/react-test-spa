// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://reqres.in/api";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (page, thunkAPI) => {
//     try {
//       const { data } = await axios.get(`/products?page=${page}&per_page=5`);
//       return data.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (page) => `/products/?page=${page}&per_page=5`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

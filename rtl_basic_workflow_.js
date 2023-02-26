import React from "react";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export const products_api = createApi({
  reducerPath: "ProductsApi",

  baseQuery: fetchBaseQuery({
    baseUrl: POSTS_URL,
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // querying a specific path to ftech all products
      query: () => "products",
    }),

    //   To query a specifix product
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

const { useGetAllProductsQuery, useGetProductQuery } = products_api;

const APiSlice = () => {
  const { data, error, isError, isLoading } = useGetAllProductsQuery();
  const { data: single_data } = useGetProductQuery("iphone");

  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div>Error...</div>
      </>
    );
  }
  setTimeout(() => {
    return (
      <>
        <ApiProvider api={products_api}>
          <div className="app">{data}</div>
        </ApiProvider>
      </>
    );
  }, 2000);
};

export default APiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { pause } from "../indexStore";

const productsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    fetchFn: async (args) => {
      await pause(300);
      return fetch(...args);
    },
  }),

  endpoints(builder) {
    return {
      // Quering !

      fetchUsers: builder.query({
        query: () => {
          return {
            url: "/users",
            method: "GET",
          };
        },
      }),

      // Mutation !

      addUsers: builder.mutation({
        query: () => {
          return {
            url: "/posts/users",
            method: "POST",
            body: {
              name: "Mouli VJ",
              id: Math.random() * 89,
            },
          };
        },
      }),

      //   Delete Mutaion !

      deleteUser: builder.mutation({
        query: (user) => {
          return {
            url: `/posts/users/${user.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUsersQuery } = productsApi;



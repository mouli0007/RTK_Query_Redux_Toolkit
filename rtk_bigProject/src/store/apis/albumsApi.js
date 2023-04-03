//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";
import { pause } from "../indexStore";

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",

    //
    fetchFn: async (...args) => {
      //  Remove For Production
      await pause(200);
      return fetch(...args);
    },
  }),

  endpoints(builder) {
    return {
      //   Add Albums

      // Mutation
      // To avoid multiple unwanted fetch request we need  to create provideTags function
      addAlbum: builder.mutation({
        invalidatesTags: (results, error, user) => {
          console.log(user.id);
          return [{ type: "UsersAlbum", id: user.id }];
        },
        query: (user) => {
          return {
            url: "/albums",
            method: "POST",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),

      //   Fetching the Albums
      // Querying
      fetchAlbums: builder.query({
        // We use Tags for auto refetching for some scenarios
        // To avoid multiple unwanted fetch request we need to create provideTags function

        providesTags: (result, error, user) => {
          console.log(result);
          console.log(user.id);
          const tags = result.map((album) => {
            return { type: "Album", id: album.id };
          });
          tags.push({ type: "UsersAlbum", id: user.id });
          return tags;
        },
        query: (user) => {
          return {
            url: "/albums",
            params: {
              //   Getting the function based on the users list user id !
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),

      //   Removing a specific album from a list !

      removeAlbum: builder.mutation({
        invalidatesTags: (results, error, album) => {
          console.log(album.id);
          return [{ type: "Album", id: album.id }];
        },
        query: (album) => {
          return {
            url: `/albums/${album.id}`,
            method: "DELETE",
          };
        },
      }),
    };
  },
});

// Once we created we have access to the below hook

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;

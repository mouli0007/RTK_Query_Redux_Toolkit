import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contacts",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/",
  }),

  tagTypes: ["Contact "],
  endpoints: (builder) => ({
    // Fetching !
    fetchContacts: builder.query({
      providesTags: ["Contact"],
      query: () => {
        return {
          url: "/contacts",
          method: "GET",
        };
      },
    }),

    contacts: builder.query({
      query: (id) => {
        return {
          url: `/contacts/${id}`,
          method: "GET",
        };
      },
    }),

    addContact: builder.mutation({
      invalidatesTags: ["Contact"],
      query: (contact) => {
        return {
          method: "POST",
          url: "/contacts",
          body: contact,
        };
      },
    }),
    updateContact: builder.mutation({
      invalidatesTags: ["Contact"],

      query: ({ id, ...rest }) => {
        return {
          method: "PUT",
          url: `/contacts/${id}`,
          body: rest,
        };
      },
    }),
    deleteContact: builder.mutation({
      invalidatesTags: ["Contact"],

      query: (id) => {
        return {
          method: "DELETE",
          url: `/contacts/${id}`,
        };
      },
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactsApi;

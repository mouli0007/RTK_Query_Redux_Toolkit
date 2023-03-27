      

############ Fetching the Data and Adding the TAGS for Automatics refetc option ################

####  Tag System in RTK Query sync the updated data which is out of date after refetching #######

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),


  endpoints(builder) {
    return {
//   Fetching the Albums
      // Querying
      fetchAlbums: builder.query({
        // We use Tags for auto refetching for some scenarios
        providesTags: ["Album"],
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
    }
  })

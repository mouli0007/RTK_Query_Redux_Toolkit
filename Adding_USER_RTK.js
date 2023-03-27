############ Fetching the Data and Adding the TAGS for Automatics refetc option ################

####  Tag System in RTK Query sync the updated data which is out of date after refetching #######

export const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),


  endpoints(builder) {
    return {
      ###3  Add Albums
        
      ### Mutation
#####     We Use INVALIDATETAGS to make the query auto fetch whenever we add the data to the server so it automaticcaly sends the second request 
          to fetch the updated data
      
        ##### To avoid multiple unwanted fetch request we need to create provideTags function
      
      addAlbum: builder.mutation({
        invalidatesTags: (result, error, user) => {
          return [{ type: "Album", id: user.id }];
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
    }
  })

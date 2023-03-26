 
		import { createApi,fetchBaseQuery  } from "@reduxjs/toolkit/query/react";


   ### BoilerPlate #####
   
   const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  
  
  ##### Fetching an albums for a single User 

  endpoints(builder) {
    return {
      fetchAlbums: builder.query({
        query: (user) => {
          return {
            url: "/albums",
            params: {
              userId: user.id,
            },
            method: "GET",
          };
        },
      }),
    };
  },
});

// Once we created we have access to the below hook 

albumsApi.useFetchAlbumsQuery();
export const { useFetchAlbumsQuery } = albumsApi;

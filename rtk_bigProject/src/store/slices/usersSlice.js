import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/remove-user";
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Pending
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    // Success
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    // Error Case
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Adding an user buy faker
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    // Success Case
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;

      // Adding the Json data manually 
      state.data.push(action.payload);
    });
    // Error Case
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    // Deleting the Users !

    builder.addCase(removeUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.isLoading = false;

      state.data = state.data.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(removeUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default usersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     data: [],
//     isLoading: false,
//     error: null,
//   },

//   // Reducers

//   reducers: {},

//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     //
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data = action.payload;
//     });
//     //
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });

//     // Adding the user

//     builder.addCase(addUser.pending, (state, action) => {
//       state.isLoading = true;
//     });
//     builder.addCase(addUser.fulfilled, (state, action) => {
//       state.isLoading = false;
//       state.data.push(action.payload);
//     });
//     builder.addCase(addUser.rejected, (state, action) => {
//       state.isLoading = false;
//       state.error = action.error;
//     });
//   },
// });

// export const userReducer = usersSlice.reducer;

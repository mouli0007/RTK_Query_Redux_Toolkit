// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { pause } from "./fetchUsers";
// import { faker } from "@faker-js/faker";

// export const addUser = createAsyncThunk("users/add", async () => {
//   const response = await axios.post("http://localhost:3005/users", {
//     name: faker.name.fullName(),
//   });

//   await pause(250);

//   return response.data;
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { pause } from "./fetchUsers";

export const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });

  await pause(250);
  return response.data;
});

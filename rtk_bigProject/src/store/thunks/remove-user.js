import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const removeUser = createAsyncThunk("user/remove", async (user) => {
  try {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    //   Fic the Error
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Couldnt able to remove the user " + err);
  }
});

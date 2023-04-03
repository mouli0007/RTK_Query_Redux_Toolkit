import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const pause = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  // Request Logic !

  try {
    const response = await axios.get("http://localhost:3005/users");
 
    //   DDEV ONLY
    await pause(1000);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error("Check the URL once !");
  }
});

// Dev ONLY

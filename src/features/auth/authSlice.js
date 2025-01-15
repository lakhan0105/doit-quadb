import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account } from "../../appwrite";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

// function for guest login
export const guestLogin = createAsyncThunk(
  "auth/guestLogin",
  async (_, thunkAPI) => {
    try {
      const resp = await account.createEmailPasswordSession(
        "guest@guest.com",
        "secret@123"
      );
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkAPI) => {
  try {
    const resp = await account.get();
    console.log;
    return resp;
  } catch (error) {
    return thunkAPI.rejectWithValue(null);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(guestLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(guestLogin.fulfilled, (state, { payload }) => {
        console.log("user is loggedin");
        state.user = payload;
      })
      .addCase(guestLogin.rejected, (state, { payload }) => {
        console.log(payload);
        state.error = payload;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.error = payload;
      });
  },
});

// export
export default authSlice.reducer;

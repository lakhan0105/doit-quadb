import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../../appwrite";
import { ID, Query } from "appwrite";
const databaseId = import.meta.env.VITE_TASKS_DATABASE_ID;
const collectionId = import.meta.env.VITE_TASKS_COLLECTION_ID;

const initialState = {
  isLoading: false,
  allTasksData: [],
  error: null,
};

// fetch all the tasks written by the user
export const fetchAllTasks = createAsyncThunk(
  "task/fetchAllTasks",
  async (userId, thunkAPI) => {
    console.log("userId is", userId);
    try {
      const resp = await databases.listDocuments(databaseId, collectionId, [
        Query.equal("userId", [userId]),
      ]);
      return resp.documents;
    } catch (error) {
      console.log("error in task/fetchAllTasks", error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// create task
export const createTask = createAsyncThunk(
  "task/createTask",
  async (data, thunkAPI) => {
    console.log(data);

    try {
      const resp = await databases.createDocument(
        databaseId,
        collectionId,
        ID.unique(),
        data
      );
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// update task
export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (data, thunkAPI) => {
    console.log(data);

    try {
      const resp = await databases.updateDocument(
        databaseId,
        collectionId,
        data?.$id,
        data
      );
      return resp;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(fetchAllTasks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllTasks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allTasksData = payload;
      })
      .addCase(fetchAllTasks.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(updateTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allTasksData = state.allTasksData.map((task) => {
          if (task.$id === payload.$id) {
            return payload;
          } else {
            return task;
          }
        });
      })
      .addCase(updateTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allTasksData.push(payload);
      })
      .addCase(createTask.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

// export
export default taskSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { JokesStateType } from "./types";


const state: JokesStateType = {
  data: [],
  favouriteJokes: [],
  isLoading: false,
  error: null
};
export const jokesSlice = createSlice({
  name: "jokes",
  initialState: state,
  reducers: {
    fetchJokes: (state) => {
      state.isLoading = true;
    },
    fetchJokesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      // state.data.map(item => item.like = false)
    },
    fetchJokesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export const {fetchJokes, fetchJokesSuccess, fetchJokesFailure} = jokesSlice.actions;
export default jokesSlice.reducer;
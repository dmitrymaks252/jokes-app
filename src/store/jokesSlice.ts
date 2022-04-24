import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JokesStateType, JokeType } from "./types";


const state: JokesStateType = {
  data: [],
  favouriteJokes: [],
  isLoading: false,
  error: null,
  isOpened: false
};
export const jokesSlice = createSlice({
  name: "jokes",
  initialState: state,
  reducers: {
    fetchJokes: (state) => {
      state.isLoading = true;
    },
    fetchJokesSuccess: (state, action: PayloadAction<{ data: JokeType[], favJokesList: JokeType[] }>) => {
      state.isLoading = false;
      state.data = action.payload.data;
      state.data.map(item => item.reaction = {like: false, dislike: false});
      state.favouriteJokes = action.payload.favJokesList;
    },
    fetchJokesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    toggleOpenClose: (state) => {
      state.isOpened = !state.isOpened;
    },
    removeFromFavourites: (state, action: PayloadAction<{ id: number }>) => {
      state.favouriteJokes = state.favouriteJokes.filter(el => el.id !== action.payload.id);
      localStorage.setItem("favourites", JSON.stringify(state.favouriteJokes));

    },
    toggleReaction: (state, action: PayloadAction<{ id: number, title: string }>) => {
      const toggledItem = state.favouriteJokes.find(item => item.id === action.payload.id);
      if (toggledItem) {
        action.payload.title === "like"
          ? toggledItem.reaction = {like: !toggledItem.reaction.like, dislike: false}
          : toggledItem.reaction = {dislike: !toggledItem.reaction.dislike, like: false};
      }
      localStorage.setItem("favourites", JSON.stringify(state.favouriteJokes));
    },
    addToFavourites: (state, action: PayloadAction<JokeType>) => {
      const alreadyAdded = state.favouriteJokes.find(item => item.id === action.payload.id);
      if (!alreadyAdded) state.favouriteJokes = [...state.favouriteJokes, action.payload];
      localStorage.setItem("favourites", JSON.stringify(state.favouriteJokes));
    },
  }
});

export const {
  fetchJokes,
  fetchJokesSuccess,
  fetchJokesFailure,
  toggleOpenClose,
  removeFromFavourites,
  toggleReaction,
  addToFavourites
} = jokesSlice.actions;

export default jokesSlice.reducer;
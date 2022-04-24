import { RootState } from "../store";

export const getJokes = (state: RootState) => state.jokes.data;
export const getFavouriteJokes = (state: RootState) => state.jokes.favouriteJokes;
export const getLoadingStatus = (state: RootState) => state.jokes.isLoading;
export const getIsOpened = (state: RootState) => state.jokes.isOpened;

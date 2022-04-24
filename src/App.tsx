import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchJokes } from "./store/jokesSlice";
import { getIsOpened, getJokes, getLoadingStatus } from "./store/selectors/selectors";
import Navbar from "./components/Navbar/Navbar";
import Jokes from "./components/Jokes/Jokes";
import Favourites from "./components/Favourites/Favourites";

import "./App.scss";

export const App = () => {
  const isOpened = useAppSelector(getIsOpened);
  const jokesList = useAppSelector(getJokes);
  const isLoading = useAppSelector(getLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchJokes());
  }, [dispatch]);

  return (
    <>
      <Navbar isOpened={isOpened}/>
      {isLoading
        ? <h3 className="loading">Loading...</h3>
        : <Jokes jokesList={jokesList}/>
      }
      <Favourites isOpened={isOpened}/>
    </>
  );
};
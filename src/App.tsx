import React, { useEffect } from "react";

import Navbar from "./components/Navbar";
import Jokes from "./components/Jokes";
import { useAppDispatch } from "./hooks/hooks";
import { fetchJokes } from "./store/jokesSlice";

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(fetchJokes())
  }, [dispatch])
  return (
    <>
      <Navbar/>
      <Jokes/>
    </>
  );
}
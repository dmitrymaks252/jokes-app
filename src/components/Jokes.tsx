import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { getJokes } from "../store/selectors/selectors";
import JokeCard from "./JokeCard";

const Jokes = () => {
  const jokesList = useAppSelector(getJokes);
  return (
    <main>
      <div>
        {jokesList.map(item => <JokeCard key={item.id} item={item}/>)}
      </div>
    </main>
  );
};

export default Jokes;
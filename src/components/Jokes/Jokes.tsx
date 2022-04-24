import React, { FC } from "react";
import RotateRightIcon from "@material-ui/icons/RotateRight";

import { useAppDispatch } from "../../hooks/hooks";
import { fetchJokes } from "../../store/jokesSlice";
import { JokeType } from "../../store/types";
import JokeCard from "../JokeCard/JokeCard";

import s from "./Jokes.module.scss";

type PropsType = {
  jokesList: Array<JokeType>
}
const Jokes: FC<PropsType> = ({jokesList}) => {
  const dispatch = useAppDispatch();

  const refreshJokesList = () => dispatch(fetchJokes());

  return (
    <main className={s.mainPart}>
      <section>
        {jokesList.map(item => <JokeCard key={item.id} item={item}/>)}
      </section>
      <button className={s.refreshBtn} onClick={refreshJokesList}>
        Refresh<RotateRightIcon/>
      </button>
    </main>
  );
};

export default Jokes;
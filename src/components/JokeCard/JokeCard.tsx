import React, { FC } from "react";
import GradeIcon from "@material-ui/icons/Grade";

import { useAppDispatch } from "../../hooks/hooks";
import { JokeType } from "../../store/types";
import { addToFavourites } from "../../store/jokesSlice";

import s from "./JokeCard.module.scss";

type PropsType = {
  item: JokeType
}

const JokeCard: FC<PropsType> = ({item}) => {
  const dispatch = useAppDispatch();

  const addJoke = () => dispatch(addToFavourites(item));

  return (
    <div className={s.jokeCard}>
      <article className={s.description}>
        <h2>Joke#{item.id} <br/> Category: {item.type} </h2>
        <p><b>Setup</b>: {item.setup}</p>
        <p><b>Punchline</b>: {item.punchline}</p>
      </article>
      <button className={s.addToFavBtn} title="Add to favourite" onClick={addJoke}>
        <GradeIcon className={s.addToFav}/>
      </button>
    </div>
  );
};

export default JokeCard;
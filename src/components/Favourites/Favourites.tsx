import React, { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getFavouriteJokes } from "../../store/selectors/selectors";
import { toggleOpenClose } from "../../store/jokesSlice";
import FavouriteJokeItem from "../FavouriteJokeItem/FavouriteJokeItem";

import s from "./Favourites.module.scss";

type PropsType = {
  isOpened: boolean
}

const Favourites: FC<PropsType> = ({...props}) => {

  const favJokesList = useAppSelector(getFavouriteJokes);
  const dispatch = useAppDispatch();

  return (
    <div
      className={props.isOpened ? `${s.favourite}` : `${s.favourite} ${s.closed}`}
      onClick={() => dispatch(toggleOpenClose())}
    >
      <div className={s.shading}/>
      <div
        className={s.favJokes}
        onClick={e => e.stopPropagation()}
      >
        {favJokesList.map((item) => <FavouriteJokeItem key={item.id} item={item}/>)}
      </div>
    </div>
  );
};

export default Favourites;
import React, { FC } from "react";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useAppDispatch } from "../../hooks/hooks";
import { JokeType } from "../../store/types";
import { removeFromFavourites, toggleReaction } from "../../store/jokesSlice";

import s from "./FavouriteJokeItem.module.scss";

type PropsType = {
  item: JokeType
}

const FavouriteJokeItem: FC<PropsType> = ({item}) => {

  const dispatch = useAppDispatch();

  const handleRemove = () => dispatch(removeFromFavourites({id: item.id}));
  const handleReaction = (title: string) => {
    dispatch(toggleReaction({id: item.id, title}));
  };

  return (
    <div className={s.favouriteJoke}>
      <div className={s.reactionBtns}>
        <button
          className={item.reaction.like ? s.likeBtn : null}
          title="Like"
          onClick={() => handleReaction("like")}
        >
          <ThumbUpIcon/>
        </button>
        <button
          className={item.reaction.dislike ? s.dislikeBtn : null}
          title="Dislike"
          onClick={() => handleReaction("dislike")}
        >
          <ThumbDownIcon/>
        </button>
      </div>
      <article className={s.description}>
        <h2> Joke#{item.id} <br/> Category: {item.type}</h2>
        <p><b>Setup:</b> {item.setup}</p>
        <p><b>Punchline:</b> {item.punchline}</p>
      </article>
      <button title="Remove" className={s.removeBtn} onClick={handleRemove}>
        <DeleteForeverIcon/>
      </button>
    </div>
  );
};

export default FavouriteJokeItem;
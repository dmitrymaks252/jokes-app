import React, { FC } from "react";
import { JokeType } from "../store/types";

type PropsType = {
  item: JokeType
}

const JokeCard: FC<PropsType> = ({item}) => {
  return (
    <div>
      <h2>Category: {item.type} ID: {item.id}</h2>
      <p>Setup: {item.setup}</p>
      <p>Punchline: {item.punchline}</p>
    </div>
  );
};

export default JokeCard;
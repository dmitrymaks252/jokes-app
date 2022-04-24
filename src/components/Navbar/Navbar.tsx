import React, { FC } from "react";

import { useAppDispatch } from "../../hooks/hooks";
import { toggleOpenClose } from "../../store/jokesSlice";

import s from "./Navbar.module.scss";

type PropsType = {
  isOpened: boolean
}

const Navbar: FC<PropsType> = ({...props}) => {
  const dispatch = useAppDispatch();

  return (
    <nav className={s.navbar}>
      <div
        className={props.isOpened ? `${s.burgerBtn} ${s.opened}` : `${s.burgerBtn}`}
        onClick={() => dispatch(toggleOpenClose())}
      >
        <span/>
      </div>
      <h1 className={s.header}>Jokes APP</h1>
    </nav>
  );
};

export default Navbar;
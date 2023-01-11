import React from "react";
import Navbar from "./navbar/Navbar";
import { useState } from "react";
import Profile from "./profile/Profile";
import OpponentList from "./opponents/OpponentList";

const Main = () => {
  //Modes for Main Page
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const NOTIFICATION = "notificaiton";

  //State for mode
  const [mode, setMode] = useState(PROFILE);

  //Helper - Set mode fucntion
  const changeMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      {/* <Navbar changeMode={changeMode} mode={mode} /> */}
      {mode === PROFILE && <Profile />}
      {mode === OPPONENT && <OpponentList />}
      {/* {mode === OPPONENT && < ~Notification Component goes here~ /> */}
    </>
  );
};

export default Main;

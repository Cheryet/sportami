import React from "react";
import Navbar from "./navbar/Navbar";
//import userAppData from "./hooks/userAppData";
import { useState } from "react";
import Profile from "./profile/Profile";

const Main = () => {
  //Modes for Main Page
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const NOTIFICATION = "notificaiton";

  //State for mode
  const [mode, setMode] = useState("profile");

  //Helper - Set mode fucntion
  const changeMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <Navbar changeMode={changeMode} />
      {mode === PROFILE && <Profile />}
    </>
  );
};

export default Main;

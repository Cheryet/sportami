import React from "react";
import Navbar from "./navbar/Navbar";
//import userAppData from "./hooks/userAppData";
import { useState } from "react";
import Profile from "./profile/Profile";
import Matches from "../matches/Matches";

const Main = () => {
  //Modes for Main Page
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const MATCHES = "matches";

  //State for mode
  const [mode, setMode] = useState("matches");

  //Helper - Set mode fucntion
  const changeMode = (mode) => {
    setMode(mode);
  };

  return (
    <>
      <Navbar changeMode={changeMode} />
      {mode === MATCHES && <Matches />}
    </>
  );
};

export default Main;

import React from "react";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

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
      <h1>Hello from main Page</h1>
    </>
  );
};

export default Main;

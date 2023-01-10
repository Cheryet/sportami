import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
//import userAppData from "./hooks/userAppData";
import Profile from "./profile/Profile";
import OpponentList from "./opponents/OpponentList";
import { PinDropSharp } from "@material-ui/icons";

const Main = (props) => {
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
      <Navbar changeMode={changeMode} mode={mode} />
      {mode === PROFILE && <Profile token={props.token} />}
      {mode === OPPONENT && <OpponentList />}
      {/* {mode === OPPONENT && < ~Notification Component goes here~ /> */}
    </>
  );
};

export default Main;

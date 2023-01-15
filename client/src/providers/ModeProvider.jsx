import React, { createContext, useState } from "react";

export const modeContext = createContext();

export default function ModeProvider(props) {
  //Modes for Main Page
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const MATCHES = "matches";
  const REVIEW = "review";
  const THANKS = "thanks";

  //State for mode
  const [mode, setMode] = useState(PROFILE);

  //Helper - Set mode fucntion
  const changeMode = (newMode) => {
    setMode(newMode);
  };

  const transitionMode = () => {
    setMode(THANKS);
    setTimeout(() => {
      setMode(MATCHES);
    }, 1500);
  };

  const modeData = {
    mode,
    changeMode,
    PROFILE,
    OPPONENT,
    MATCHES,
    REVIEW,
    THANKS,
    transitionMode,
  };

  return (
    <modeContext.Provider value={modeData}>
      {props.children}
    </modeContext.Provider>
  );
}

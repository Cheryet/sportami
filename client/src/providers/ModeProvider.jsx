import React, { createContext, useState } from "react";

export const modeContext = createContext();

export default function ModeProvider(props) {
  //Modes for Main Page
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const NOTIFICATIONS = "notifications";
  const REVIEW = "review";

  //State for mode
  const [mode, setMode] = useState(PROFILE);

  //Helper - Set mode fucntion
  const changeMode = (newMode) => {
    setMode(newMode);
  };

  const modeData = {
    mode,
    changeMode,
    PROFILE,
    OPPONENT,
    NOTIFICATIONS,
    REVIEW,
  };

  return (
    <modeContext.Provider value={modeData}>
      {props.children}
    </modeContext.Provider>
  );
}

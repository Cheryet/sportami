import { React, useContext} from "react";
import Navbar from "./navbar/Navbar";
//import userAppData from "./hooks/userAppData";

import { modeContext } from "../../providers/ModeProvider";

import Profile from "./profile/Profile";
import OpponentList from "./opponents/OpponentList";
import Matches from "../matches/Matches";
import Review from "./review/Review"

const Main = () => {

  const { mode, PROFILE, OPPONENT, NOTIFICATIONS, REVIEW } = useContext(modeContext);

  return (
    <>
      {/* <Navbar/> */}
      {mode === PROFILE && <Profile />}
      {mode === OPPONENT && <OpponentList />}
      {mode === NOTIFICATIONS && <Matches/>}
      {mode === REVIEW && <Review/>}
    </>
  );
};

export default Main;

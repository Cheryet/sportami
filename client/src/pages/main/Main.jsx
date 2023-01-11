import { React, useContext} from "react";
import { modeContext } from "../../providers/ModeProvider";
import MatchProvider from "../../providers/MatchProvider";
import Navbar from "./navbar/Navbar";
//import userAppData from "./hooks/userAppData";




import Profile from "./profile/Profile";
import OpponentList from "./opponents/OpponentList";
import Matches from "../matches/Matches";
import Review from "./review/Review"

const Main = () => {

  const { mode, PROFILE, OPPONENT, NOTIFICATIONS, REVIEW } = useContext(modeContext);

  return (
    <MatchProvider>
      <Navbar/>
      {mode === PROFILE && <Profile />}
      {mode === OPPONENT && <OpponentList />}
      {mode === NOTIFICATIONS && <Matches/>}
      {mode === REVIEW && <Review/>}
    </MatchProvider>
  );
};

export default Main;

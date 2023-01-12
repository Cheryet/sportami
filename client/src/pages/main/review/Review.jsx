import React, { useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import { getMatchSport } from "../../../helpers/selectors";
import "./review.scss";

//INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('1', '1', 5);

//need to set state to chosen match when review is clicked
//need to be able to click on stars to set sportsmanship value
//need 2 buttons or a selector for to set the winner(only display is current user is the match challenger)
//

const Review = (props) => {
  //TEST DATA//
  const testUserSportID = 1;
  const testWinnerID = 1;
  const testRating = 5;
  //
  const { matchState, createReview } = useContext(matchContext);
  const { changeMode, NOTIFICATIONS } = useContext(modeContext);

  const userID = parseInt(props.token);

  console.log("Reviewed Match", matchState);
  console.log("Current User", userID);

  const sendReview = () => {
    createReview(testUserSportID, testWinnerID, testRating);
    changeMode(NOTIFICATIONS);
  };

  return (
    <div className="review-container">
      <section>
        <button onClick={sendReview}>Finish Review</button>
      </section>
    </div>
  );
};

export default Review;

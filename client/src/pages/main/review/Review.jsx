import React, { useContext, useState } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import { getMatchSport, getUserSportID } from "../../../helpers/selectors";
import { Rating } from "@mui/material";
import "./review.scss";

//INSERT INTO reviews ( user_sport_id, winner_id, sportsmanship_rating ) VALUES ('1', '1', 5);

//need to set state to chosen match when review is clicked
//need to be able to click on stars to set sportsmanship value
//need 2 buttons or a selector for to set the winner(only display is current user is the match challenger)
//

const Review = (props) => {
  //TEST DATA//
  const testWinnerID = 1;
  //

  const userID = parseInt(props.token);

  const { state, matchState, createReview } = useContext(matchContext);
  const { changeMode, NOTIFICATIONS } = useContext(modeContext);

  const [rating, setRating] = useState(2.5);

  const userSportID = getUserSportID(state, matchState.sport_id, userID);

  const sendReview = () => {
    createReview(userSportID, testWinnerID, rating);
    changeMode(NOTIFICATIONS);
  };

  return (
    <div className="review-container">
      <section>
        <button onClick={sendReview}>Finish Review</button>
        <Rating
          name="half-rating"
          defaultValue={2.5}
          precision={0.5}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </section>
    </div>
  );
};

export default Review;

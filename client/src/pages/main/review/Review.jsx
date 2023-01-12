import React, { useContext, useState } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import { getUserSportID } from "../../../helpers/selectors";
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

  const [winner, setWinner] = useState();

  const userSportID = getUserSportID(state, matchState.sport_id, userID);

  const sendReview = () => {
    createReview(userSportID, winner, rating);
    changeMode(NOTIFICATIONS);
  };

  return (
    <div className="review-container">
      <section>
        <section className="winner-buttons">
          <h2>Choose the Winner</h2>
          <button
            className="you-button"
            onClick={() => {
              setWinner(matchState.challenger_id);
            }}
          >
            You
          </button>
          <button
            className="opponent-button"
            onClick={() => {
              setWinner(matchState.opponent_id);
            }}
          >
            Them
          </button>
        </section>
        <section className="rating-select">
          <h2>Rate your opponent</h2>
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </section>
        <section className="finish-button">
          <button onClick={sendReview}>Finish Review</button>
        </section>
      </section>
    </div>
  );
};

export default Review;

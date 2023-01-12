import React, { useContext, useState } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import { getUserSportID } from "../../../helpers/selectors";
import { Rating } from "@mui/material";

import "./review.scss";

const Review = (props) => {
  const userID = parseInt(props.token);

  const { state, matchState, createReview } = useContext(matchContext);
  const { changeMode, NOTIFICATIONS } = useContext(modeContext);

  //Handles the MUI rating value
  const [rating, setRating] = useState(3);

  //Handles the winning user_id
  const [winner, setWinner] = useState(null);

  const userSportID = getUserSportID(state, matchState.sport_id, userID);

  //Sends the post request to create the review and returns you to the notifications page
  const sendReview = () => {
    createReview(userSportID, winner, rating);
    changeMode(NOTIFICATIONS);
  };

  //Conditional rendering to allow only one user, the initial challenger, to choose the winner
  if (matchState.challenger_id === userID) {
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
              defaultValue={3}
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
  }
  return (
    <div className="review-container">
      <section>
        <h2>Review Your Match</h2>
        <section className="rating-select">
          <h2>Rate your opponent</h2>
          <Rating
            name="half-rating"
            defaultValue={3}
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

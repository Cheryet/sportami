import React, { useContext, useState } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import {
  getUserSportID,
  getMatchSport,
  getMatchChallenger,
  getMatchOpponent,
} from "../../../helpers/selectors";
import { Rating } from "@mui/material";

import "./review.scss";

const Review = (props) => {
  const userID = parseInt(props.token);

  const { state, matchState, createReview, challengerReview, opponentReview } =
    useContext(matchContext);
  const { changeMode, NOTIFICATIONS } = useContext(modeContext);

  //Handles the MUI rating value
  const [rating, setRating] = useState(0);

  //Handles the winning user_id
  const [winner, setWinner] = useState(null);

  const userSportID = getUserSportID(state, matchState.sport_id, userID);

  //Used to get access to user and sport names to populate the page
  const matchSport = getMatchSport(state, matchState);
  const opponent = getMatchOpponent(state, matchState);
  const challenger = getMatchChallenger(state, matchState);

  //Sends the post request to create the review and returns you to the notifications page
  const sendReview = () => {
    createReview(userSportID, winner, rating);
    changeMode(NOTIFICATIONS);
  };

  //Sends put request to update match that the challenger has reviewed it
  const challengerFinish = () => {
    challengerReview(matchState.id);
  };

  //Sends put request to update match that the opponent has reviewed it
  const opponentFinish = () => {
    opponentReview(matchState.id);
  };

  //Conditional rendering to allow only one user, the initial challenger, to choose the winner
  if (matchState.challenger_id === userID) {
    return (
      <div className="review-container">
        <h2>
          Review your {matchSport} match with {opponent.first_name}
        </h2>
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
              {opponent.first_name}
            </button>
          </section>
          <section className="rating-select">
            <h2>Rate {opponent.first_name}'s sportsmanship!</h2>
            <Rating
              name="half-rating"
              defaultValue={0}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </section>
          <section className="finish-button">
            <button
              onClick={() => {
                sendReview();
                challengerFinish();
              }}
            >
              Finish Review
            </button>
          </section>
        </section>
      </div>
    );
  }
  return (
    <div className="review-container">
      <h2>
        Review your {matchSport} match with {challenger.first_name}
      </h2>
      <section>
        <section className="rating-select">
          <h2>Rate {challenger.first_name}'s sportsmanship!</h2>
          <Rating
            name="half-rating"
            defaultValue={0}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </section>
        <section className="finish-button">
          <button
            onClick={() => {
              sendReview();
              opponentFinish();
            }}
          >
            Finish Review
          </button>
        </section>
      </section>
    </div>
  );
};

export default Review;

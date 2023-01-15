import React, { useContext, useState } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { modeContext } from "../../../providers/ModeProvider";
import {
  getUserSportID,
  getMatchSport,
  getMatchChallenger,
  getMatchOpponent,
} from "../../../helpers/selectors";
import { Rating, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import "./review.scss";

const Review = (props) => {
  const userID = parseInt(props.token);

  const { state, matchState, createReview, challengerReview, opponentReview } =
    useContext(matchContext);
  const { changeMode, transitionMode } = useContext(modeContext);

  //Handles the winning user_id
  const [winner, setWinner] = useState(null);

  const challengerSportID = getUserSportID(
    state,
    matchState.sport_id,
    matchState.challenger_id
  );
  const opponentSportID = getUserSportID(
    state,
    matchState.sport_id,
    matchState.opponent_id
  );

  //Used to get access to user and sport names to populate the page
  const matchSport = getMatchSport(state, matchState);
  const opponent = getMatchOpponent(state, matchState);
  const challenger = getMatchChallenger(state, matchState);

  //Sends the post request to create the review and returns you to the notifications page
  const sendChallengerReview = () => {
    createReview(challengerSportID, winner, starValue);
    transitionMode();
  };

  //Sends the post request to create the review and returns you to the notifications page
  const sendOpponentReview = () => {
    createReview(opponentSportID, winner, starValue);
    transitionMode();
  };

  //Sends put request to update match that the challenger has reviewed it
  const challengerFinish = () => {
    challengerReview(matchState.id);
  };

  //Sends put request to update match that the opponent has reviewed it
  const opponentFinish = () => {
    opponentReview(matchState.id);
  };

  //Handles the rating star hover effect

  const labels = {
    1: "Very Bad Sport",
    2: "Poor Sport",
    3: "Good Sport",
    4: "Great Sport",
    5: "Excellent Sport",
  };

  function getLabelText(starValue) {
    return `${starValue} Star${starValue !== 1 ? "s" : ""}, ${
      labels[starValue]
    }`;
  }

  const [starValue, setStarValue] = useState(3);
  const [hover, setHover] = useState(-1);

  //Conditional rendering to allow only one user, the initial challenger, to choose the winner
  if (matchState.challenger_id === userID) {
    return (
      <div className="review">
        <div className="review-container">
          <h2 className="review-header">
            We hope you had fun against {opponent.first_name}!
          </h2>
          <section>
            <div className="review-winner">
              <div className="review-winner-header">
                Who won the game of {matchSport}?
              </div>
              <section className="review__button-winner">
                <button
                  className={
                    winner === matchState.challenger_id
                      ? "review__button--winner-chosen"
                      : "review__button--winner"
                  }
                  onClick={() => {
                    setWinner(matchState.challenger_id);
                  }}
                >
                  You
                </button>
                <button
                  className={
                    winner === matchState.opponent_id
                      ? "review__button--winner-chosen"
                      : "review__button--winner"
                  }
                  onClick={() => {
                    setWinner(matchState.opponent_id);
                  }}
                >
                  {opponent.first_name}
                </button>
              </section>
            </div>
            <section className="review__sportsmanship">
              <div className="sportsmanship-header">
                How was {opponent.first_name}'s sportsmanship?
              </div>
              <Rating
                name="hover-feedback"
                value={starValue}
                precision={1}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setStarValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {starValue !== null && (
                <Box sx={{ ml: 2 }}>
                  {labels[hover !== -1 ? hover : starValue]}
                </Box>
              )}
            </section>
            <section className="finish_review">
              <button
                className="review__button--finish"
                onClick={() => {
                  sendOpponentReview();
                  challengerFinish();
                }}
              >
                Finish Review
              </button>
            </section>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="review">
      <div className="review-container">
        <h2 className="review-header">
          We hope you had fun against {challenger.first_name}!
        </h2>
        <section>
          <section className="review__sportsmanship">
            <div className="sportsmanship-header">
              How was {challenger.first_name}'s sportsmanship?
            </div>
            <Rating
              name="hover-feedback"
              value={starValue}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setStarValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {starValue !== null && (
              <Box sx={{ ml: 2 }}>
                {labels[hover !== -1 ? hover : starValue]}
              </Box>
            )}
          </section>
          <section className="finish_review">
            <button
              className="review__button--finish"
              onClick={() => {
                sendChallengerReview();
                opponentFinish();
              }}
            >
              Finish Review
            </button>
          </section>
        </section>
      </div>
    </div>
  );
};
export default Review;

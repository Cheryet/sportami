import { React, useContext } from "react";
import { matchContext } from "../../../../providers/MatchProvider";
import { modeContext } from "../../../../providers/ModeProvider";
import {
  getAcceptedMatchesByUser,
  getMatchSport,
  getMatchChallenger,
  getMatchOpponent,
} from "../../../../helpers/selectors";

import "./styles.scss";

export default function MatchesListItem(props) {
  //converts userID token to a number to keep the selectors happy
  const userID = parseInt(props.token);

  const { changeMode, REVIEW } = useContext(modeContext);

  const { state, deleteMatch, storeMatch } = useContext(matchContext);

  const { matches } = state;

  const userMatches = getAcceptedMatchesByUser(matches, userID);

  const matchesItem = userMatches.map((match) => {
    const matchSport = getMatchSport(state, match);
    const opponent = getMatchOpponent(state, match);
    const challenger = getMatchChallenger(state, match);

    const cancel = () => {
      deleteMatch(match.id);
    };

    //If the logged in user sent the match request render this
    if (match.challenger_id === props.token) {
      const message = `Send ${opponent.username} a message at ${opponent.email} to set up your game of ${matchSport}!`;

      return (
        <main className="match" key={match.id}>
          <section className="match__opponent">
            <section className="match__opponent-profile">
              <img
                className="match__opponent-profile-pic"
                src={opponent.profile_pic}
                alt={opponent.username}
              />
            </section>
            <section className="match__opponent-message">{message}</section>
          </section>

          <section className="match__buttons">
            <button className="acceptedButton">EMAIL</button>
            <button
              className="acceptedButton"
              onClick={() => {
                storeMatch(match);
                changeMode(REVIEW);
              }}
            >
              REVIEW
            </button>
            <button className="acceptedButton" onClick={cancel}>
              CANCEL
            </button>
          </section>
        </main>
      );
    } else {
      //If the logged in user recieved the match request render this
      const message = `Send ${challenger.username} a message at ${challenger.email} to set up your game of ${matchSport}!`;

      return (
        <main className="match" key={match.id}>
          <section className="match__opponent">
            <section className="match__opponent-profile">
              <img
                className="match__opponent-profile-pic"
                src={challenger.profile_pic}
                alt={challenger.username}
              />
            </section>
            <section className="match__opponent-message">{message}</section>
          </section>

          <section className="match__buttons">
            <button className="acceptedButton">EMAIL</button>
            <button
              className="acceptedButton"
              onClick={() => {
                storeMatch(match);
                changeMode(REVIEW);
              }}
            >
              REVIEW
            </button>
            <button className="acceptedButton" onClick={cancel}>
              CANCEL
            </button>
          </section>
        </main>
      );
    }
  });

  return <section>{matchesItem}</section>;
}

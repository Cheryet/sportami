import { React, useContext } from "react";
import { matchContext } from "../../../../providers/MatchProvider";
import {
  getSentMatchesByUser,
  getMatchSport,
  getMatchOpponent,
} from "../../../../helpers/selectors";
import "./styles.scss";

export default function MatchesListItem(props) {
  //converts userID token to a number to keep the selectors happy
  const userID = parseInt(props.token);

  const { state, deleteMatch } = useContext(matchContext);

  const { matches } = state;

  const sentMatches = getSentMatchesByUser(matches, userID);

  //renders the sent match requests for given user
  const matchesItem = sentMatches.map((match) => {
    const matchSport = getMatchSport(state, match);
    const opponent = getMatchOpponent(state, match);
    const message = `User ${opponent.username} has not yet accepted your ${matchSport} challenge`;

    const cancel = () => {
      deleteMatch(match.id);
    };

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
          <button className="buttonCancel" onClick={cancel}>
            CANCEL
          </button>
        </section>
      </main>
    );
  });

  return <section>{matchesItem}</section>;
}

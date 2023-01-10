import { React, useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { getSentMatchesByUser, getMatchSport, getMatchOpponent } from "../../../helpers/selectors";
import "./styles.scss";
import Button from "../Button";

export default function MatchesListItem() {
  
  const testID = 1

  const { state } = useContext(matchContext);

  const { matches } = state

  const sentMatches = getSentMatchesByUser(matches, testID)
  
  const matchesItem = sentMatches.map((match) => {

    const matchSport = getMatchSport(state, match)

    const opponent = getMatchOpponent(state, match)

    const message = `User ${opponent.username} has not yet accepted your ${matchSport} challenge`

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
          <section className="match__opponent-message">
           {message}
          </section>
        </section>
        
        <section className="match__buttons">
          <Button cancel >CANCEL</Button>
        </section>
      </main>
    )}
  );

  return (
    <section>
      {matchesItem}
    </section>
  );
};

import { React, useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import { getAcceptedMatchesByUser, getMatchSport, getMatchChallenger, getMatchOpponent } from "../../../helpers/selectors";

import "./styles.scss";
import Button from "../Button";

export default function MatchesListItem() {
  
  const testID = 1

  const { state } = useContext(matchContext);

  const { matches } = state

  const userMatches = getAcceptedMatchesByUser(matches, testID)
    
  const matchesItem = userMatches.map((match) => {

    const matchSport = getMatchSport(state, match)

    const opponent = getMatchOpponent(state, match)
    const challenger = getMatchChallenger(state, match)

    if (match.challenger_id === testID) {

    const message = `Send ${opponent.username} a message at ${opponent.email} to set up your game of ${matchSport}!`

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
          <Button email >EMAIL</Button>
          <Button review >REVIEW</Button>
          <Button confirmedCancel >CANCEL</Button>
        </section>
      </main>
    )} else {
      
      const message = `Send ${challenger.username} a message at ${challenger.email} to set up your game of ${matchSport}!`

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
            <section className="match__opponent-message">
            {message}
            </section>
          </section>
          
          <section className="match__buttons">
            <Button email >EMAIL</Button>
            <Button review >REVIEW</Button>
            <Button confirmedCancel >CANCEL</Button>
          </section>
        </main>
      )}
    }
  );

  return (
    <section>
      {matchesItem}
    </section>
  );
};

export function getUser(state, userId) {
  const users = state.users;

  let user = users.filter(user => user.id === userId);
  
  let userObj = user[0];

  return userObj;
}

export function getAcceptedMatchesByUser(matches, userId) {

  let userMatches = matches.filter(match => 
    match.challenger_id === userId && match.accepted === true || match.opponent_id === userId && match.accepted === true);

  return userMatches;
}

export function getSentMatchesByUser(matches, userId) {

  let sentMatches = matches.filter(match => match.challenger_id === userId && match.accepted === false);

  return sentMatches;
}

export function getReceivedMatchesByUser(matches, userId) {

  let receivedMatches = matches.filter(match => match.opponent_id === userId && match.accepted === false);

  return receivedMatches;
}

export function getMatchSport(state, match) {
  
  const matchSportID = match.sport_id

  const sports = state.sports

  let matchSport = sports.filter(sport => sport.id === matchSportID);

  let sportName = matchSport[0].name

  return sportName;
}

export function getMatchChallenger(state, match) {
  
  const matchChallengerID = match.challenger_id

  const users = state.users

  let matchChallenger = users.filter(user => user.id === matchChallengerID);

  let challenger = matchChallenger[0]

  return challenger;
}

export function getMatchOpponent(state, match) {
  
  const matchOpponentID = match.opponent_id

  const users = state.users

  let matchOpponent = users.filter(user => user.id === matchOpponentID);

  let opponent = matchOpponent[0]

  return opponent;
}

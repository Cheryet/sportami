//returns user from DB with given user ID
export function getUser(state, userId) {
  const users = state.users;

  let user = users.filter((user) => user.id === userId);

  let userObj = user[0];

  return userObj;
}

//returns matches for given user that have been accepted by opponent
export function getAcceptedMatchesByUser(matches, userId) {
  let userMatches = matches.filter(
    (match) =>
      (match.challenger_id === userId && match.accepted === true) ||
      (match.opponent_id === userId && match.accepted === true)
  );

  return userMatches;
}

//returns matches for given user that have not yet been accepted
export function getSentMatchesByUser(matches, userId) {
  let sentMatches = matches.filter(
    (match) => match.challenger_id === userId && match.accepted === false
  );

  return sentMatches;
}

//returns matches requests for given user that they have yet to accept
export function getReceivedMatchesByUser(matches, userId) {
  let receivedMatches = matches.filter(
    (match) => match.opponent_id === userId && match.accepted === false
  );

  return receivedMatches;
}

//returns the sport name for given match
export function getMatchSport(state, match) {
  const matchSportID = match.sport_id;

  const sports = state.sports;

  let matchSport = sports.filter((sport) => sport.id === matchSportID);

  let sportName = matchSport[0].name;

  return sportName;
}

//returns the user who sent the match request
export function getMatchChallenger(state, match) {
  const matchChallengerID = match.challenger_id;

  const users = state.users;

  let matchChallenger = users.filter((user) => user.id === matchChallengerID);

  let challenger = matchChallenger[0];

  return challenger;
}

//returns the user who received the match request
export function getMatchOpponent(state, match) {
  const matchOpponentID = match.opponent_id;

  const users = state.users;

  let matchOpponent = users.filter((user) => user.id === matchOpponentID);

  let opponent = matchOpponent[0];

  return opponent;
}

//returns the given users user_sport_id
export function getUserSportID(state, sportID, userID) {
  const userSports = state.user_sports;

  const userSportArr = userSports.filter(
    (userSport) =>
      userSport.user_id === userID && userSport.sport_id === sportID
  );

  const userSportID = userSportArr[0].id;

  return userSportID;
}

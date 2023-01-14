import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const matchContext = createContext();

export default function MatchProvider(props) {
  const [state, setState] = useState({
    users: [],
    sports: [],
    user_sports: [],
    matches: [],
    reviews: [],
  });

  const [matchUpdate, setMatchUpdate] = useState(false);

  const [matchState, setMatchState] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/sports"),
      axios.get("/api/user_sports"),
      axios.get("/api/matches"),
      axios.get("/api/reviews"),
    ]).then((all) => {
      setMatchUpdate(false);
      setState((prev) => ({
        ...prev,
        users: all[0].data,
        sports: all[1].data,
        user_sports: all[2].data,
        matches: all[3].data,
        reviews: all[4].data,
      }));
    });
  }, [matchUpdate]);

  const sendMatchRequest = (userID, oppID, location, sportID) => {
    axios
      .post("/api/matches/new", {
        challenger_id: userID,
        opponent_id: oppID,
        location: location,
        sport_id: sportID,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Match not created", err.message));
  };

  const acceptMatch = (id) => {
    axios
      .put("/api/matches/" + id, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Match not updated", err.message));
  };

  const challengerReview = (id) => {
    axios
      .put(`/api/matches/${id}/challenger`, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Match not updated", err.message));
  };

  const opponentReview = (id) => {
    axios
      .put(`/api/matches/${id}/opponent`, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Match not updated", err.message));
  };

  const deleteMatch = (id) => {
    axios
      .delete("/api/matches/" + id, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Match not deleted", err.message));
  };

  // For Match Reviews
  const storeMatch = (match) => {
    setMatchState(match);
  };

  const createReview = (userSportID, winnerID, rating) => {
    axios
      .post("/api/reviews/new", {
        user_sport_id: userSportID,
        winner_id: winnerID,
        sportsmanship_rating: rating,
      })
      .then(() => {
        setMatchUpdate(true);
      })
      .catch((err) => console.log("Review not created", err.message));
  };

  const matchData = {
    state,
    acceptMatch,
    deleteMatch,
    sendMatchRequest,
    storeMatch,
    matchState,
    createReview,
    challengerReview,
    opponentReview,
  };

  return (
    <matchContext.Provider value={matchData}>
      {props.children}
    </matchContext.Provider>
  );
}

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

  const sendMatchRequest = (userID, oppID, cityID, sportID) => {
    axios
      .post("/api/matches/new", {
        challenger_id: userID,
        opponent_id: oppID,
        location_id: cityID,
        sport_id: sportID,
      })
      .then(() => {
        setMatchUpdate(true);
        console.log("Match created");
      })
      .catch((err) => console.log("Match not created", err.message));
  };

  const acceptMatch = (id) => {
    console.log("/api/matches/" + id);

    axios
      .put("/api/matches/" + id, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
        console.log("Match updated");
      })
      .catch((err) => console.log("Match not updated", err.message));
  };

  const deleteMatch = (id) => {
    console.log("/api/matches/" + id);

    axios
      .delete("/api/matches/" + id, {
        id: id,
      })
      .then(() => {
        setMatchUpdate(true);
        console.log("Match deleted");
      })
      .catch((err) => console.log("Match not deleted", err.message));
  };

  const matchData = { state, acceptMatch, deleteMatch, sendMatchRequest };

  return (
    <matchContext.Provider value={matchData}>
      {props.children}
    </matchContext.Provider>
  );
}

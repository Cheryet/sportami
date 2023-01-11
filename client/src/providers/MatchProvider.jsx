import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const matchContext = createContext();

export default function MatchProvider(props) {

  const [state, setState] = useState({
    users: [],
    sports: [],
    user_sports: [],
    matches: [],
    reviews: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/sports'),
      axios.get('/api/user_sports'),
      axios.get('/api/matches'),
      axios.get('/api/reviews')
    ]).then((all) => {
      setState(prev => ({...prev, users: all[0].data, sports: all[1].data, user_sports: all[2].data, matches: all[3].data, reviews: all[4].data}));
    });
  }, []);

  const acceptMatch = (id) => {
    console.log("/api/matches/" + id)
    axios.put("/api/matches/" + id, {
      id: id
    })
    .then((res) => {
      const matches = [...state.matches];
      matches.push(res.data);
      setState({ ...state, matches });
      console.log("Match updated");
    })
    .catch((err) => console.log("Match not updated", err.message));
  };

  const deleteMatch = (id) => {
    console.log("/api/matches/" + id)
    axios.delete("/api/matches/" + id, {
      id: id
    })
    .then((res) => {
      const matches = [...state.matches];
      matches.push(res.data);
      setState({ ...state, matches });
      console.log("Match deleted");
    })
    .catch((err) => console.log("Match not deleted", err.message));
  };

  const matchData = { state, acceptMatch, deleteMatch };
  
  return (
    <matchContext.Provider value={matchData}>
      {props.children}
    </matchContext.Provider>
  )

};
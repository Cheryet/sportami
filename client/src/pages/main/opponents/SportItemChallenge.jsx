import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import "./sportItemChallenge.scss";

const SportItemChallenge = (props) => {
  //Sports State

  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get(`/api/sports`).then((res) => {
      setSports(res.data);
    });
  }, []);

  let sport = "";
  const getSportById = (id) => {
    sports.forEach((item) => {
      if (item.id === id) {
        sport = item.name;
      }
    });
  };

  //handles the challenge user buttons
  const { sendMatchRequest } = useContext(matchContext);

  const sendRequest = (sport) => {
    sendMatchRequest(
      props.token,
      props.user_id,
      props.location,
      props.sport_id
    );
    props.toggleChallenge(true);
    props.challengeSport(sport);
  };

  getSportById(props.sport_id);

  return (
    <>
      <button
        className="opp-sportItemChallenge-button"
        onClick={() => {
          sendRequest(sport);
        }}
      >
        {sport}
      </button>
    </>
  );
};

export default SportItemChallenge;

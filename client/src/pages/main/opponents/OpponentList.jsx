import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Opponents from "./Opponent";
import "./opponentList.scss";

const OpponentList = (props) => {
  const [opponentData, setOpponentData] = useState({
    opponents: [],
    sports: [],
  });

  //Helper - Get all opponents
  useEffect(() => {
    const opponentsPromise = axios.get("/api/users");
    const sportsPromise = axios.get("/api/user_sports");

    Promise.all([opponentsPromise, sportsPromise]).then((all) => {
      setOpponentData({ opponents: all[0].data, sports: all[1].data });
    });
  }, []);

  //Helper - Pass down opponentData as props to component
  //            if user is logged in, remove from list
  let opponentList = [];
  const getOpponentList = (token) => {
    if (opponentData.opponents) {
      opponentList = opponentData.opponents.map((item, index) => {
        if (item.id !== token) {
          return (
            <Opponents
              key={index}
              user_id={item.id}
              age={item.age}
              bio={item.bio}
              location={item.location}
              profile_pic={item.profile_pic}
              username={item.username}
              first_name={item.first_name}
              sports={opponentData.sports}
              token={props.token}
            />
          );
        }
      });
    }
  };
  const currentUser = parseInt(props.token);
  getOpponentList(currentUser);

  return (
    <>
      <div className="opponent-list">
        <section className="description-container">
          <p className="text">Start searching for opponents in your area!</p>
          <button className="filter-button">FILTER</button>
        </section>
        <hr />
        {opponentList}
      </div>
    </>
  );
};

export default OpponentList;

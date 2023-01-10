import React from "react";
import Opponents from "./Opponent";
import "./opponentList.scss";

const OpponentList = () => {
  return (
    <>
      <div className="opponent-list">
        <section className="description-container">
          <p className="text">Start searching for opponents in your area!</p>
          <button className="filter-button">FILTER</button>
        </section>
        <hr />
        <Opponents />
      </div>
    </>
  );
};

export default OpponentList;
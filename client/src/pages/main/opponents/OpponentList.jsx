import React, { useState } from "react";
import Opponents from "./Opponent";
import "./opponentList.scss";
import Accordion from "../../../components/filter/Accordion";

const OpponentList = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  return (
    <>
      <div className="opponent-list">
        <section className="description-container">
          <p className="text">Start searching for opponents in your area!</p>
          <button
            className="filter-button"
            onClick={() => setShowAccordion(!showAccordion)}
          >
            FILTER
          </button>
        </section>
        {showAccordion && (
          <Accordion
            setShowAccordion={setShowAccordion}
            showAccordion={showAccordion}
          />
        )}
        <hr />
        <Opponents />
      </div>
    </>
  );
};

export default OpponentList;

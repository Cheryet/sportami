import React, { useState } from "react";
import "./filter.scss";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="opponent-list">
        <section className="description-container">
          <p className="text">Start searching for opponents in your area!</p>
          <button className="filter-button" onClick={() => setIsOpen(!isOpen)}>
            FILTER
          </button>
        </section>
      </div>
    </>
  );
}

export default Filter;

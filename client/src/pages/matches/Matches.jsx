import React from "react";

import Match from "./Match/index";

import "./matches.scss";

function Matches() {

  return (
    <div class="matches">
      <header class="header">
        Your Open Matches
      </header>
      <Match />
    </div>
  );
}

export default Matches;

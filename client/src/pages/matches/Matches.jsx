import React from "react";

import Match from "./Match/index";

import "./matches.scss";

function Matches() {

  return (
      <section class="matches">
        <section class="header">
          Your Open Matches
        </section>
        <Match />
      </section>
  );
}

export default Matches;

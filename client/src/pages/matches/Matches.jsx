import React from "react";

import MatchProvider from "../../providers/MatchProvider";

import Match from "./Match/index";

import "./matches.scss";

function Matches() {

  return (
    <MatchProvider>
      <section class="matches">
        <section class="header">
          Your Open Matches
        </section>
        <Match />
      </section>
    </MatchProvider>
  );
}

export default Matches;

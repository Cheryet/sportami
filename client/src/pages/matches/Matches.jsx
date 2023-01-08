import React from "react";

import Nav from "./Nav";
import Match from "./Match/index";

import "./matches.scss";

function Matches() {

  return (
    <>
      <Nav />
      <section class="matches">
        <section class="header">
          Your Open Matches
        </section>
        <Match />
      </section>
    </>
  );
}

export default Matches;

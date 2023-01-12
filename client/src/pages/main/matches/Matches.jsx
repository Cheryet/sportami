import React from "react";

import Match from "./Match/index";

import "./matches.scss";

function Matches(props) {
  return (
    <section className="matches">
      <section className="header">Your Open Matches</section>
      <Match token={props.token} />
    </section>
  );
}

export default Matches;

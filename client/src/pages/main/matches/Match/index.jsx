import React from "react";
import "./styles.scss";

// import useVisualMode from "/hooks/useVisualMode";

import AllMatches from "./AllMatches";

export default function Match(props) {
  return (
    <>
      <AllMatches token={props.token} />
    </>
  );
}

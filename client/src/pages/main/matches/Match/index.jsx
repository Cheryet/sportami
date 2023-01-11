import React from "react";
import "./styles.scss";

// import useVisualMode from "/hooks/useVisualMode";

import Accepted from "./Accepted";
import Confirm from "./Confirm";
import Pending from "./Pending";

export default function Match(props) {
  return (
    <>
      <Accepted token={props.token} />
      <Confirm token={props.token} />
      <Pending token={props.token} />
    </>
  );
}

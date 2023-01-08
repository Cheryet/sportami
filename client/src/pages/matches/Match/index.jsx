import React from 'react'
import "./styles.scss";

// import useVisualMode from "/hooks/useVisualMode";

import Accepted from "./Accepted";
import Card from "./Card";
import Confirm from "./Confirm";
import Pending from "./Pending";


export default function Match(props) {
  // const PENDING = "PENDING";
  // const ACCEPTED = "ACCEPTED";
  // const CONFIRM = "CONFIRM";




  // const { mode, transition, back } = useVisualMode(
  //   props.match ? ACCEPTED : PENDING
  // );


  // const declineMatch = function() {

  //   props
  //     .declineMatch(props.id)
  // }

   return (
    <>
      <Card />
      {/* {mode === PENDING && (
        <Pending
          challenger={props.match.challenger}
          opponent={props.match.opponent}
        />
      )}
      {mode === ACCEPTED && (
        <Accepted 
          challenger={props.match.challenger}
          opponent={props.match.opponent}
          onCancel={declineMatch} 
        />
      )}
      {mode === CONFIRM && (
        <Confirm
          onConfirm={confirmMatch}
          onDecline={declineMatch} 
        />
      )} */}
    </>
  );
}

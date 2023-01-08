import React from "react";

import MatchItem from "./MatchItem";

import "./matches.scss";

function Matches() {

  let testMatchData = [
    {"id":1,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_id":1,"accepted":true}, 
    {"id":2,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_id":1,"accepted":false},
    {"id":3,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_id":1,"accepted":false}]
    
  const testChallenger ={"id":1,"username":"SportyDuder","first_name":"Ophelia","email":"123@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  const testOpponent = {"id":2,"username":"Less Sporty Person","first_name":"Terrance","email":"1234@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  
  return (
    <div class="matches">
      <header class="header">
        Your Open Matches
      </header>
      <MatchItem />
    </div>
  );
}

export default Matches;

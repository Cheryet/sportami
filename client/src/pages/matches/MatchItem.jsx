import React from "react";
import "./matches.scss";
import Button from "./Button";

import { Avatar } from '@mui/material';

export default function MatchesListItem(props) {

  let testMatchData = [
    {"id":1,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Tennis","accepted":true}, 
    {"id":2,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Bowling","accepted":false},
    {"id":3,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Pickle Ball","accepted":false},
    {"id":4,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Table Tennis","accepted":false},
    {"id":5,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Squash","accepted":false}]
    
  const testChallenger ={"id":1,"username":"SportyDuder","first_name":"Ophelia","email":"123@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  const testOpponent = {"id":2,"username":"testDude","first_name":"Terrance","email":"1234@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  
  const matchesItem = testMatchData.map((match) => {
    return (
      <div class="matchitem" key={match.id}>
        <div class="opponent">
          <Avatar
            alt="Opponent"
            src={testOpponent.profile_pic}
            sx={{ width: "2rem", height: "2rem" }}
            />
          <p>
           User {testOpponent.username} has challenged you to {match.sport_name}!
          </p>
        </div>
        
        <div className="buttons">
          <Button>Accept</Button>
          <Button>Decline</Button>
        </div>
      </div>
    )}
  );

  return (
    <ul>
      {matchesItem}
    </ul>
  );
};

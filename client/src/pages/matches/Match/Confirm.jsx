import React from "react";
import "./styles.scss";
import Button from "../Button";

export default function MatchesListItem(props) {

  let testMatchData = [
    {"id":1,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Tennis","accepted":true}, 
    {"id":2,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Bowling","accepted":false},
    {"id":3,"challenger_id":2,"opponent_id":1,"location_id":1,"sport_name":"Pickle Ball","accepted":false},
    {"id":4,"challenger_id":2,"opponent_id":1,"location_id":1,"sport_name":"Table Tennis","accepted":false},
    {"id":5,"challenger_id":1,"opponent_id":2,"location_id":1,"sport_name":"Squash","accepted":false}]
    
  const testChallenger ={"id":1,"username":"SportyDuder","first_name":"Ophelia","email":"123@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  const testOpponent = {"id":2,"username":"testDude","first_name":"Terrance","email":"1234@gmail.com","location":"Vancouver","profile_pic":"https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"}
  
  const matchesItem = testMatchData.map((match) => {
    const message = `User ${testOpponent.username} has challenged you to ${match.sport_name}!`
    
    if (match.accepted === false && match.opponent_id === testOpponent.id) {

    return (
      <main className="match" key={match.id}>
        <section className="match__opponent">
          <section className="match__opponent-profile">
            <img
            className="match__opponent-profile-pic"
            src={testOpponent.profile_pic}
            alt={testOpponent.username}
            />
          </section>
          <section className="match__opponent-message">
           {message}
          </section>
        </section>
        
        <section className="match__buttons">
          <Button accept >Accept</Button>
          <Button decline >Decline</Button>
        </section>
      </main>
      )}
      }
    );

  return (
    <section>
      {matchesItem}
    </section>
  );
};

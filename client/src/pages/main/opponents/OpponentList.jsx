import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Opponents from "./Opponent";
import "./opponentList.scss";
import Accordion from "../../../components/filter/Accordion";

const OpponentList = (props) => {
  const [opponentData, setOpponentData] = useState({
    opponents: [],
    sports: [],
  });
  const [showAccordion, setShowAccordion] = useState(false);
  const [isGet, setIsGet] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    Sport: [],
    Gender: [],
    Location: [],
    Skill: [],
    Age: [],
  });
  const [filteredList, setFilteredList] = useState([]);
  const [userSport, setUserSport] = useState([]);

  //Helper - Get all opponents
  useEffect(() => {
    const opponentsPromise = axios.get("/api/users");
    const sportsPromise = axios.get("/api/user_sports");

    Promise.all([opponentsPromise, sportsPromise]).then((all) => {
      setOpponentData({ opponents: all[0].data, sports: all[1].data });
    });
    handlePost();
  }, []);

  //Helper - Pass down opponentData as props to component
  //            if user is logged in, remove from list
  let opponentList = [];
  const getOpponentList = (token) => {
    if (opponentData.opponents) {
      opponentList = opponentData.opponents.map((item, index) => {
        if (item.id !== token) {
          return (
            <Opponents
              key={index}
              user_id={item.id}
              age={item.age}
              bio={item.bio}
              location={item.location}
              profile_pic={item.profile_pic}
              username={item.username}
              first_name={item.first_name}
              sports={opponentData.sports}
              token={props.token}
            />
          );
        }
      });
    }
  };

  const currentUser = parseInt(props.token);
  getOpponentList(currentUser);

  useEffect(() => {
    if (isGet) {
      handlePost();
    }
  }, [isGet]);

  const filteredData = [];
  function filterOpponents(opponents, selectedOptions) {
    opponents.forEach((opponent) => {
      if (opponent.id.toString() !== props.token) {
        let match = true;
        // check if opponent's gender property matches any selected options in the Gender category
        if (
          match &&
          selectedOptions.Gender.length > 0 &&
          !selectedOptions.Gender.includes(opponent.gender)
        ) {
          match = false;
        }
        // check if opponent's location property matches any selected options in the Location category
        if (
          match &&
          selectedOptions.Location.length > 0 &&
          !selectedOptions.Location.includes(opponent.location)
        ) {
          match = false;
        }
        // check if opponent's age property matches any selected options in the Age category
        if (
          match &&
          selectedOptions.Age.length > 0 &&
          !selectedOptions.Age.includes(opponent.age)
        ) {
          selectedOptions.Age.forEach((ageRange) => {
            const agesBounds = ageRange.split("-");
            const bottomBound = parseInt(agesBounds[0]);
            const upperBound = parseInt(agesBounds[1]);
            if (opponent.age < bottomBound || opponent.age > upperBound) {
              match = false;
            }
          });
        }
        // check if opponent's sport property matches any selected options in the Sport category
        if (match && selectedOptions.Sport.length > 0) {
          match = opponent.sports.some(({ sport }) =>
            selectedOptions.Sport.includes(sport)
          );
        }
        // check if opponent's skill property matches any selected options in the Sport category
        if (match && selectedOptions.Skill.length > 0) {
          match = opponent.sports.some(({ self_skill }) =>
            selectedOptions.Skill.includes(self_skill)
          );
        }
        if (match) {
          filteredData.push(opponent);
        }
      }
    });
    return filteredData;
  }

  const handlePost = async () => {
    try {
      const { data: users } = await axios.get("/api/users");
      const { data: userSports } = await axios.get("/api/user_sports");
      const { data: sports } = await axios.get("/api/sports");

      // Create a map of sports by id
      const sportsMap = sports.reduce((acc, sport) => {
        acc[sport.id] = sport;
        return acc;
      }, {});

      // Create a map of userSports by user_id
      const userSportsMap = userSports.reduce((acc, userSport) => {
        if (!acc[userSport.user_id]) {
          acc[userSport.user_id] = [userSport];
        } else {
          acc[userSport.user_id].push(userSport);
        }
        return acc;
      }, {});

      let loggedInUserSelectedSports = [];
      userSports.forEach((userSport) => {
        if (userSport.user_id === parseInt(props.token)) {
          loggedInUserSelectedSports.push(sportsMap[userSport.sport_id].name);
        }
      });
      // Combine the data
      const combinedData = users.map((user) => {
        return {
          ...user,
          sports: userSportsMap[user.id].map((userSport) => {
            return {
              sport_id: userSport.sport_id,
              user_id: user.id,
              sport: sportsMap[userSport.sport_id].name,
              self_skill: userSport.self_skill,
            };
          }),
        };
      });
      setUserSport(loggedInUserSelectedSports);
      const filteredOpponents = filterOpponents(combinedData, selectedOptions);
      setFilteredList(filteredOpponents);
      setIsGet(false);
    } catch (error) {}
  };

  return (
    <>
      <div className="opponent-list">
        <section className="description-container">
          <p className="text">Search for opponents in your area!</p>
          <button
            className="filter-button"
            onClick={() => setShowAccordion(!showAccordion)}
          >
            FILTER
          </button>
        </section>
        {showAccordion && (
          <Accordion
            setShowAccordion={setShowAccordion}
            showAccordion={showAccordion}
            setSelectedOptions={setSelectedOptions}
            selectedOptions={selectedOptions}
            setIsGet={setIsGet}
            userSport={userSport}
          />
        )}
        <hr className="hr-opponentList" />
        {filteredList.map((opponent, index) => {
          return (
            <Opponents
              key={index}
              user_id={opponent.id}
              age={opponent.age}
              bio={opponent.bio}
              location={opponent.location}
              profile_pic={opponent.profile_pic}
              username={opponent.username}
              first_name={opponent.first_name}
              sports={opponent.sports}
              token={props.token}
            />
          );
        })}
      </div>
    </>
  );
};

export default OpponentList;

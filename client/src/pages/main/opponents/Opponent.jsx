import { useState } from "react";
import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";
import SkillItem from "../profile/Skilltem";
import SportItem from "../profile/SportItem";
import SportItemChallenge from "./SportItemChallenge";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";
import axios from "axios";

function Opponents(props) {
  //state for challenge drop down buttons
  const [dropdown, setDropdown] = useState(false);

  //state for if challenge was sent or not
  const [sentChallenge, setSentChallenge] = useState(false);

  //state for challenge sport
  const [challengeSport, setChallengeSport] = useState(null);

  //state for rating
  const [rating, setRating] = useState();

  //set rating for user
  useEffect(() => {
    axios.get(`/api/reviews/rating/${props.user_id}`).then((data) => {
      setRating(data.data);
    });
  }, []);

  //Helper - Show/Hide challenge button dropdown
  const showDropdown = () => {
    setDropdown(!dropdown);
    setSentChallenge(false);
  };

  //Helper - Get Sports for player from list
  let mySports = [];
  const getMySports = (user_id) => {
    props.sports.forEach((item) => {
      if (item.user_id === user_id) {
        mySports.push(item);
      }
    });
  };

  // Helper - Get Skill Level for user
  let skillList = [];
  const getSkillList = () => {
    if (mySports) {
      skillList = mySports.map((item, index) => {
        return <SkillItem key={index} skillLevel={item.self_skill} />;
      });
    }
  };

  //Helper - Get Sports for user
  let sportList = [];
  const getSportsList = () => {
    if (mySports) {
      sportList = mySports.map((item, index) => {
        return <SportItem key={index} sport_id={item.sport_id} />;
      });
    }
  };

  //Helper - Get Sports for user for challenge
  let sportListChallenge = [];
  const getSportsListChallenge = () => {
    if (mySports) {
      sportListChallenge = mySports.map((item, index) => {
        return (
          <SportItemChallenge
            key={index}
            sport_id={item.sport_id}
            token={props.token}
            user_id={props.user_id}
            location={props.location}
            showDropdown={showDropdown}
            toggleChallenge={setSentChallenge}
            challengeSport={setChallengeSport}
          />
        );
      });
    }
  };

  //Helper - Get Sportsmanship rating
  const getRating = () => {
    if (rating) {
      return parseInt(rating.avg);
    }
    return 0;
  };

  const userRating = getRating();
  getMySports(props.user_id);
  getSkillList();
  getSportsList();
  getSportsListChallenge();

  return (
    <div className="opponents">
      <div className="opp-profile-photo-container">
        <img
          src={props.profile_pic}
          alt="profile"
          className="opp-profile-photo"
        />
      </div>

      <section className="opp-personal-info">
        <p className="opp-name-age">
          {props.first_name}, {props.age}
        </p>
        <p className="opp-location">
          <TbIcon.TbMapPin className="opp-pin-icon" />
          {props.location}
        </p>
      </section>

      <div className="opp-sportsmanship-rating">
        <p className="opp-rating-title">SPORTSMANSHIP </p>
        <Rating
          className="opp-rating-stars"
          name="half-rating-read"
          size="small"
          value={userRating}
          precision={0.5}
          readOnly
        />
      </div>

      <div className="opp-bio">{props.bio}</div>
      <section className="opp-sports-skills">
        <div className="opp-sports">
          <p className="opp-sport-title">SPORTS</p>
          <ul className="opp-sport-item-list">{sportList}</ul>
        </div>
        <div className="opp-skill-level">
          <p className="opp-skill-title">SKILL LEVEL</p>
          <ul className="opp-sport-item-list">{skillList}</ul>
        </div>
      </section>
      <div
        className={
          dropdown
            ? "opponent-challenge-button"
            : "opponent-challenge-button active"
        }
      >
        <button className="opponent-challenge-btn" onClick={showDropdown}>
          CHALLENGE OPPONENT
        </button>
      </div>
      <div
        className={
          dropdown
            ? "opponent-challenge-sports-btn-container active"
            : "opponent-challenge-sports-btn-container"
        }
      >
        {!sentChallenge && (
          <p className="opponent-challenge-title">
            Choose a sport to challenge {props.first_name}!
          </p>
        )}
        {sentChallenge && (
          <p className="opponent-challenge-title">
            {challengeSport} challenge sent to {props.first_name}!
          </p>
        )}

        <div className="opponent-selection-btn">
          {sportListChallenge}
          <button className="sportItemChallenge-button" onClick={showDropdown}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Opponents;

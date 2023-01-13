import { useState } from "react";
import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";
import SkillItem from "../profile/Skilltem";
import SportItem from "../profile/SportItem";
import SportItemChallenge from "./SportItemChallenge";

function Opponents(props) {
  //state for challenge drop down buttons
  const [dropdown, setDropdown] = useState(false);

  //state for if challenge was sent or not
  const [sentChallenge, setSentChallenge] = useState(false);

  //Helper - Show/Hide challenge button dropdown
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  //Helper - Toggle SentChallenge
  const toggleChallenge = () => {
    setSentChallenge(!sentChallenge);
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
            toggleChallenge={toggleChallenge}
          />
        );
      });
    }
  };

  getMySports(props.user_id);
  getSkillList();
  getSportsList();
  getSportsListChallenge();

  return (
    <div className="opponents">
      <div className="profile-photo-container">
        <img src={props.profile_pic} alt="profile" className="profile-photo" />
      </div>

      <section className="personal-info-123">
        <p className="name-age">
          {props.first_name}, {props.age}
        </p>
        <p className="location">
          <TbIcon.TbMapPin className="pin-icon" />
          {props.location}
        </p>
      </section>

      <div className="sportsmanship">
        <p className="sportsmanship-text">
          SPORTSMANSHIP&nbsp;
          <AiIcon.AiFillStar className="star-icon-sportsmanship one" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship two" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship three" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship four" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship five" />
        </p>
      </div>

      <div className="bio">{props.bio}</div>
      <section className="sports-skills">
        <div className="sports">
          <p className="sport-title">SPORTS</p>
          <p className="sport-ammount">{mySports.length}/6 Sports</p>
          <ul className="sport-item-list">{sportList}</ul>
        </div>
        <div className="skill-level">
          <p className="skill-title">SKILL LEVEL</p>
          <p className="skill-accuracy">
            SKILL ACCURACY&nbsp;
            <AiIcon.AiFillStar className="star-icon-accuracy one" />
            <AiIcon.AiFillStar className="star-icon-accuracy two" />
            <AiIcon.AiFillStar className="star-icon-accuracy three" />
            <AiIcon.AiFillStar className="star-icon-accuracy four" />
            <AiIcon.AiFillStar className="star-icon-accuracy five" />
          </p>
          <ul className="sport-item-list">{skillList}</ul>
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
            Challenge sent to {props.first_name}!
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

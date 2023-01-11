import { useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";

import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";
import SkillItem from "../profile/Skilltem";
import SportItem from "../profile/SportItem";

function Opponents(props) {
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

  getMySports(props.user_id);
  getSkillList();
  getSportsList();

  //handles the challenge user buttons
  const testSportID = 1;

  const { sendMatchRequest } = useContext(matchContext);

  const sendRequest = () => {
    sendMatchRequest(props.token, props.user_id, props.location, testSportID);
  };

  return (
    <div className="opponents">
      <div className="profile-photo-container">
        <img src={props.profile_pic} alt="profile" className="profile-photo" />
      </div>

      <section className="personal-info">
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
      <div className="button-container" onclick={sendRequest}>
        <button className="challenge">CHALLENGE OPPONENT</button>
      </div>
    </div>
  );
}

export default Opponents;

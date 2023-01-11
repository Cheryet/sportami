import { useContext } from "react";
import { matchContext } from "../../../providers/MatchProvider";
import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";

function Opponents() {

  const testUserID = 1;
  const testOpponentID = 2;
  const testOpponentLocation = 3;
  const testSportID = 1;

  const { sendMatchRequest } = useContext(matchContext);
  
  const sendRequest = () => {sendMatchRequest(testUserID, testOpponentID, testOpponentLocation, testSportID)};

  return (
    <div className="opponents">
      <div className="profile-photo-container">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile-photo"
          className="profile-photo"
        />
      </div>

      <section className="personal-info">
        <p className="name-age">Alisa Vorotyntseva, 22</p>
        <p className="location">
          <TbIcon.TbMapPin className="pin-icon" />
          Oakville, ON
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

      <div className="bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laborum labore culpa aliquid officiis laboriosam hic et amet.
      </div>
      <section className="sports-skills">
        <div className="sports">
          <p className="sport-title">SPORTS</p>
          <p className="sport-ammount">2/6 Sports</p>
          <div className="sport-item-list">
            <p className="sport-item">Tennis</p>
            <p className="sport-item">Ping Pong</p>
          </div>
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
          <div className="sport-item-list">
            <p className="sport-item">Amateur</p>
            <p className="sport-item">Professional</p>
          </div>
        </div>
      </section>
      <div className="button-container">
        <button className="challenge" onClick={sendRequest} >CHALLENGE OPPONENT</button>
      </div>
    </div>
  );
}

export default Opponents;

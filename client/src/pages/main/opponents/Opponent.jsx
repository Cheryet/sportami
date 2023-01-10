import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";

function Opponents() {
  return (
    <div className="opponents-opponents">
      <div className="profile-photo-container-opponents">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="profile-photo"
          className="profile-photo-opponents"
        />
      </div>

      <section className="personal-info-opponents">
        <p className="name-age-opponents">Alisa Vorotyntseva, 22</p>
        <p className="location-opponents">
          <TbIcon.TbMapPin className="pin-icon-opponents" />
          Oakville, ON
        </p>
      </section>

      <div className="sportsmanship-opponents">
        <p className="sportsmanship-text-opponents">
          SPORTSMANSHIP&nbsp;
          <AiIcon.AiFillStar className="star-icon-sportsmanship one" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship two" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship three" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship four" />
          <AiIcon.AiFillStar className="star-icon-sportsmanship five" />
        </p>
      </div>

      <div className="bio-opponents">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laborum labore culpa aliquid officiis laboriosam hic et amet.
      </div>
      <section className="sports-skills-opponents">
        <div className="sports-opponents">
          <p className="sport-title-opponents">SPORTS</p>
          <p className="sport-ammount-opponents">2/6 Sports</p>
          <div className="sport-item-list-opponents">
            <p className="sport-item-opponents">Tennis</p>
            <p className="sport-item-opponents">Ping Pong</p>
          </div>
        </div>
        <div className="skill-level-opponents">
          <p className="skill-title-opponents">SKILL LEVEL</p>
          <p className="skill-accuracy-opponents">
            SKILL ACCURACY&nbsp;
            <AiIcon.AiFillStar className="star-icon-accuracy one" />
            <AiIcon.AiFillStar className="star-icon-accuracy two" />
            <AiIcon.AiFillStar className="star-icon-accuracy three" />
            <AiIcon.AiFillStar className="star-icon-accuracy four" />
            <AiIcon.AiFillStar className="star-icon-accuracy five" />
          </p>
          <div className="sport-item-list-opponents">
            <p className="sport-item-opponents">Amateur</p>
            <p className="sport-item-opponents">Professional</p>
          </div>
        </div>
      </section>
      <div className="button-container-opponents">
        <button className="challenge-opponents">CHALLENGE OPPONENT</button>
      </div>
    </div>
  );
}

export default Opponents;

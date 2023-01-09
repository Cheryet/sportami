import "./opponent.scss";
import * as TbIcon from "react-icons/tb";
import * as AiIcon from "react-icons/ai";

function Opponents() {
  return (
    <div className="opponents">
      <section className="description-container">
        <p className="text">Start searching for opponents in your area!</p>
        <button className="filter-button">FILTER</button>
      </section>

      <hr />

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
          <AiIcon.AiFillStar className="star-icon one" />
          <AiIcon.AiFillStar className="star-icon two" />
          <AiIcon.AiFillStar className="star-icon three" />
          <AiIcon.AiFillStar className="star-icon four" />
          <AiIcon.AiFillStar className="star-icon five" />
        </p>
      </div>

      <div className="bio">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        laborum labore culpa aliquid officiis laboriosam hic et amet recusandae
        nam ea numquam officia quia tempora aliquam dignissimos reiciendis, in
        minima.
      </div>
      <section className="sports-skills">
        <div className="sports">
          <div className="sport">Tennis</div>
          <div className="sport">Ping Pong</div>
        </div>
        <div className="skill-level">
          <div className="skill-accuracy">SKILL ACCURACY</div>
          <div className="sport">Amateur</div>
          <div className="sport">Professional</div>
        </div>
      </section>
      <button className="challenge">Challenge Opponent</button>
    </div>
  );
}

export default Opponents;

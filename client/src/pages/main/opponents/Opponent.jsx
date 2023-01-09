import "./opponent.scss";

function Opponents() {
  return (
    <div className="opponents">
      <section className="description-container">
        <p className="text">
          Start searching for opponents in your area. Use the filter to further
          sort your results.
        </p>
        <button className="filter-button">FILTER</button>
      </section>
      {/* <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="profile-photo"
        className="profile-photo"
      /> */}
      <section className="personal-info">
        <p className="name-age">Alisa Vorotyntseva, 22</p>
        <p className="location">📍 Oakville, ON</p>
      </section>
      <div className="sportsmanship">SPORTSMANSHIP</div>
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

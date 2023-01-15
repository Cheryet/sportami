import { React, useContext, useState } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import { userDataContext } from "../../../providers/UserDataProvider";
import TopSport from "./TopSport";
import * as TbIcon from "react-icons/tb";
import "./navbar.scss";
import { useEffect } from "react";

const Navbar = () => {
  //Providers
  const { mode, changeMode, PROFILE, OPPONENT, MATCHES } =
    useContext(modeContext);

  const { userData, location } = useContext(userDataContext);

  const [topSportId, setTopSportId] = useState();

  //Helper - Get top sport for user

  const getTopSport = (sports) => {
    sports.forEach((item) => {
      if (item.self_skill === "Pro") {
        return setTopSportId(item.sport_id);
      }

      if (item.self_skill === "Amatuer") {
        return setTopSportId(item.sport_id);
      }
    });
  };

  useEffect(() => {
    getTopSport(userData.sports);
  });

  return (
    <>
      <div className="navbar-container">
        <div className="top-container">
          <div className="title-container">
            <p className="title">SPORTAMI</p>
            <p className="slogan">Turn an ami into an enemy</p>
          </div>
          <button className="logout-btn">Logout</button>
        </div>
        <div className="container-middle">
          <p className="welcome-message">
            Welcome, {userData.user.first_name}!
          </p>
          <p className="best-sport">
            <span>TOP SPORT:&nbsp;</span>
            <TopSport sport_id={topSportId} />
          </p>
          <p className="nav-location">
            <TbIcon.TbMapPin className="pin-icon" />
            {location}
          </p>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li
              className={mode === PROFILE ? "nav-item active" : "nav-item"}
              onClick={() => {
                changeMode(PROFILE);
              }}
            >
              MY PROFILE
            </li>
            <li
              className={mode === OPPONENT ? "nav-item active" : "nav-item"}
              onClick={() => {
                changeMode(OPPONENT);
              }}
            >
              FIND OPPONENT
            </li>
            <li
              className={mode === MATCHES ? "nav-item active" : "nav-item"}
              onClick={() => {
                changeMode(MATCHES);
              }}
            >
              MATCHES
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

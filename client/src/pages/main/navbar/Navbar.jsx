import { React, useContext } from "react";
import { modeContext } from "../../../providers/ModeProvider";
import * as TbIcon from "react-icons/tb";
import "./navbar.scss";

const Navbar = () => {
  
  const { mode, changeMode, PROFILE, OPPONENT, NOTIFICATIONS } = useContext(modeContext);
  
  return (
    <>
      <div className="navbar-container">
        <div className="top-container">
          <div className="title-container">
            <p className="title">SPORTAMI</p>
            <p className="slogan">Turn an ami into an enemy</p>
          </div>
          <button>Logout</button>
        </div>
        <div className="middle-container">
          <p className="welcome-message">Welcome, Corbin!</p>
          <p className="best-sport">
            <span>TOP SPORT:</span>&nbsp;Golf
          </p>
          <p className="location">
            <TbIcon.TbMapPin className="pin-icon" />
            Lethrbidge
          </p>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li
              className={
                mode === PROFILE ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                changeMode(PROFILE);
              }}
            >
              MY PROFILE
            </li>
            <li
              className={
                mode === OPPONENT ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                changeMode(OPPONENT);
              }}
            >
              FIND OPPONENT
            </li>
            <li
              className={
                mode === NOTIFICATIONS ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                changeMode(NOTIFICATIONS);
              }}
            >
              NOTIFICATIONS
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
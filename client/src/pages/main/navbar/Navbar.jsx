import React from "react";
import * as TbIcon from "react-icons/tb";
import "./navbar.scss";

const Navbar = (props) => {
  //Modes for Navbar
  const PROFILE = "profile";
  const OPPONENT = "opponent";
  const NOTIFICATIONS = "notifications";

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
                props.mode === PROFILE ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                props.changeMode(PROFILE);
              }}
            >
              MY PROFILE
            </li>
            <li
              className={
                props.mode === OPPONENT ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                props.changeMode(OPPONENT);
              }}
            >
              FIND OPPONENT
            </li>
            <li
              className={
                props.mode === NOTIFICATIONS ? "nav-item active" : "nav-item"
              }
              onClick={() => {
                props.changeMode(NOTIFICATIONS);
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

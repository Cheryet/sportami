import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
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
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">MY PROFILE</li>
            <li className="nav-item">FIND OPPONENT</li>
            <li className="nav-item">NOTIFICATIONS</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

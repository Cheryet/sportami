import React from "react";
import "./navbar.scss";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar-container">
        <div className="top-container">
          <div className="title">
            <p>SPORTAMI</p>
            <p>Turn an ami into an enemy</p>
          </div>
          <button>Logout</button>
        </div>
        <div className="middle-container">
          <p>Welcome, Corbin!</p>
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

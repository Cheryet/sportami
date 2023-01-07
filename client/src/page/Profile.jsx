import React from "react";
import "./profile.scss";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";

const Profile = () => {
  return (
    <>
      {/* This is the temp nav bar for design only */}
      <div className="temp-nav">
        <p>this is the temp nav bar</p>
      </div>

      {/* The component start here */}
      <div className="profile-container">
        <div className="top-container">
          <div className="profile-photo">
            <img
              src="https://i.pinimg.com/originals/fb/c0/47/fbc047e678aaa3f4e09206c61c819d4f.jpg"
              alt=""
            />
          </div>
          <div className="user-info">
            <p className="name-title">NAME</p>
            <hr className="name-line" />
            <p className="item name">Corbin Heryet</p>
            <p className="username-title">USERNAME</p>
            <hr className="username-line" />
            <p className="item username">@Cheryet</p>
            <p className="email-title">EMAIL</p>
            <hr className="email-line" />
            <p className="item email">C.Heryet@outlook.com</p>
          </div>
        </div>
        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container">
              <TbIcon.TbMapPin className="pin-icon" />
              <p>Lethbridge</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender">Male</p>
          </div>
          <div className="bio-container">
            <p className="about-me">ABOUT ME</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="sports-container">
            <p className="sports-title">SPORTS</p>
            <ul className="sports-list">
              <li className="sports-item">Tennis</li>
              <li className="sports-item">Golf</li>
              <li className="sports-item">Ping Pong</li>
            </ul>
          </div>
          <div className="skill-level-container">
            <p className="skill-level-title">SKILL LEVEL</p>
            <ul className="skill-level-list">
              <li className="skill-level-item">Amatuer</li>
              <li className="skill-level-item">Casual</li>
              <li className="skill-level-item">Pro</li>
            </ul>
          </div>
        </div>
        <div className="button-container">
          <button>EDIT PROFILE</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

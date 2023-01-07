import React from "react";
import "./profile.scss";
import * as TbIcon from "react-icons/tb";

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
            <p className="name">Corbin Heryet</p>
            <p className="username">@Cheryet</p>
            <p className="email">C.Heryet@outlook.com</p>
          </div>
        </div>
        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container">
              <TbIcon.TbMapPin className="pin-icon" />
              <p>Lethbridge</p>
            </div>
            <p>Male</p>
          </div>
          <div className="bio">
            <p>This is where the bio state will go eventually</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

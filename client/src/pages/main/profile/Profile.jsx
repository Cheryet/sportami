import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./profile.scss";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";
import SkillItem from "./Skilltem";
import SportItem from "./SportItem";

const Profile = (props) => {
  //Location Dropdown state
  const [dropdown, setDropdown] = useState(false);

  //Location state
  const [location, setLocation] = useState("Lethbridge");

  //User State
  const [userData, setUserData] = useState({ user: {}, sports: [] });

  //Helper - Show/Hide location dropdown
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  //Helper - Set Location
  const changeLocation = (city) => {
    setLocation(city);
    setDropdown(false);
  };

  //Helper - Get users data when logged in
  useEffect(() => {
    const userPromise = axios.get(`/api/users/${props.token}`);
    const sportsPromise = axios.get(`/api/user_sports/${props.token}`);

    Promise.all([userPromise, sportsPromise]).then((all) => {
      setUserData({ user: all[0].data[0], sports: all[1].data });
    });
  }, []);

  // Helper - Get Skill Level for user
  let skillList = [];
  const getSkillList = () => {
    if (userData.sports) {
      skillList = userData.sports.map((item, index) => {
        return <SkillItem key={index} skillLevel={item.self_skill} />;
      });
    }
  };

  //Helper - Get Sports for user
  let sportList = [];
  const getSportsList = () => {
    if (userData.sports) {
      sportList = userData.sports.map((item, index) => {
        return <SportItem key={index} sport_id={item.sport_id} />;
      });
    }
  };

  getSportsList();
  getSkillList();

  return (
    <>
      <div className="profile-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img
              src="https://i.pinimg.com/originals/fb/c0/47/fbc047e678aaa3f4e09206c61c819d4f.jpg"
              alt=""
            />
          </div>
          <div className="user-info">
            <p className="name-title">NAME</p>
            <hr className="name-line" />
            <p className="item name">{userData.user.first_name}</p>
            <p className="username-title">USERNAME</p>
            <hr className="username-line" />
            <p className="item username">@{userData.user.username}</p>
            <p className="email-title">EMAIL</p>
            <hr className="email-line" />
            <p className="item email">{userData.user.email}</p>
          </div>
        </div>
        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container" onClick={showDropdown}>
              <TbIcon.TbMapPin className="pin-icon" />
              <p>{location}</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender">{userData.user.gender}</p>
          </div>
          <div
            className={
              dropdown
                ? "location-dropdown-123 active"
                : "location-dropdown-123"
            }
          >
            <button
              className="btn-location-profile"
              onClick={() => {
                changeLocation("Lethbridge");
              }}
            >
              Lethbridge
            </button>
            <button
              className="btn-location-profile"
              onClick={() => {
                changeLocation("Oakville");
              }}
            >
              OakVille
            </button>
            <button
              className="btn-location-profile"
              onClick={() => {
                changeLocation("Vancouver");
              }}
            >
              Vancouver
            </button>
          </div>
          <div className="bio-container">
            <p className="about-me">ABOUT ME</p>
            <hr />
            <p>{userData.user.bio}</p>
          </div>
        </div>
        <div className="bottom-container">
          <div className="sports-container">
            <p className="sports-title">SPORTS</p>
            <hr />
            <ul className="sports-list">{sportList}</ul>
          </div>
          <div className="skill-level-container">
            <p className="skill-level-title">SKILL LEVEL</p>
            <hr />
            <ul className="skill-level-list">{skillList}</ul>
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

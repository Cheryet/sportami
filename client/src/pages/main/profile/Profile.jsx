import React, { useContext } from "react";
import { userDataContext } from "../../../providers/UserDataProvider";
import { useState } from "react";
import "./profile.scss";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";
import SkillItem from "./Skilltem";
import SportItem from "./SportItem";
import Rating from "@mui/material/Rating";

const Profile = (props) => {
  //Provider
  const { userData, setLocation, location } = useContext(userDataContext);

  //Location Dropdown state
  const [dropdown, setDropdown] = useState(false);

  //Helper - Show/Hide location dropdown
  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  //Helper - Set Location
  const changeLocation = (city) => {
    setLocation(city);
    setDropdown(false);
  };

  // Helper - Get Skill Levels for user
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

  //Helper - Get Sportsmanship rating
  const getRating = () => {
    if (userData.rating.avg) {
      return parseInt(userData.rating.avg);
    } else {
      return 0;
    }
  };

  const rating = getRating();
  getSportsList();
  getSkillList();

  return (
    <>
      <div className="profile-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img src={userData.user.profile_pic} alt="" />
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
              Oakville
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
            <p className="bio-nav">{userData.user.bio}</p>
            <div className="profile-sportsmanship-rating">
              <p className="profile-rating-title">MY SPORTSMANSHIP RATING: </p>
              <Rating
                className="profile-rating-stars"
                name="half-rating-read"
                size="small"
                value={rating}
                precision={0.5}
                readOnly
              />
            </div>
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
          <button className="edit-profile-btn">EDIT PROFILE</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

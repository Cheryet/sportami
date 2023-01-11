import React, { useContext } from "react";
import { userDataContext } from "../../../providers/UserDataProvider";
import { useState } from "react";
import "./profile.scss";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";
import SkillItem from "./Skilltem";
import SportItem from "./SportItem";

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

  getSportsList();
  getSkillList();

  return (
    <>
      <div className="profile-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img src={userData.user.profile_pic} alt="" />
          </div>
          <div className="user-info-profile">
            <p className="name-title-profile">NAME</p>
            <hr className="name-line" />
            <p className="item-profile name-profile">
              {userData.user.first_name}
            </p>
            <p className="username-title-profile">USERNAME</p>
            <hr className="username-line" />
            <p className="item-profile username-profile">
              @{userData.user.username}
            </p>
            <p className="email-title-profile">EMAIL</p>
            <hr className="email-line" />
            <p className="item-profile email-profile">{userData.user.email}</p>
          </div>
        </div>
        <div className="middle-container-profile">
          <div className="location-gender-container-profile">
            <div className="location-container-profile" onClick={showDropdown}>
              <TbIcon.TbMapPin className="pin-icon-profile" />
              <p>{location}</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender-profile">{userData.user.gender}</p>
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
          <div className="bio-container-profile">
            <p className="about-me-profile">ABOUT ME</p>
            <hr />
            <p>{userData.user.bio}</p>
          </div>
        </div>
        <div className="bottom-container-profile">
          <div className="sports-container-profile">
            <p className="sports-title-profile">SPORTS</p>
            <hr />
            <ul className="sports-list-profile">{sportList}</ul>
          </div>
          <div className="skill-level-container-profile">
            <p className="skill-level-title-profile">SKILL LEVEL</p>
            <hr />
            <ul className="skill-level-list-profile">{skillList}</ul>
          </div>
        </div>
        <div className="button-container-profile">
          <button>EDIT PROFILE</button>
        </div>
      </div>
    </>
  );
};

export default Profile;

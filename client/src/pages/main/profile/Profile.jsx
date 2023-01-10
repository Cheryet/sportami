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
    //Gets user data based on user_id -- ONCE TOKEN IS DONE, REPLACE ID(6) WITH USER-TOKEN
    const userPromise = axios.get(`/api/users/1`);
    const sportsPromise = axios.get(`/api/user_sports/1`);

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

  console.log("Token:", props.token);

  getSportsList();
  getSkillList();

  return (
    <>
      <div className="profile-container-profile">
        <div className="top-container-profile">
          <div className="profile-photo-profile">
            <img
              className="mugshot"
              src="https://i.pinimg.com/originals/fb/c0/47/fbc047e678aaa3f4e09206c61c819d4f.jpg"
              alt=""
            />
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
                ? "location-dropdown active"
                : "location-dropdown-profile"
            }
          >
            <button
              onClick={() => {
                changeLocation("Lethbridge");
              }}
            >
              Lethbridge
            </button>
            <button
              onClick={() => {
                changeLocation("Oakville");
              }}
            >
              OakVille
            </button>
            <button
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

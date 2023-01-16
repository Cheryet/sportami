import "./about.scss";
import * as TbIcon from "react-icons/tb";
import * as MdIcon from "react-icons/md";
import Rating from "@mui/material/Rating";

const About = () => {
  return (
    <>
      <h1 className="about-us-title">ABOUT US</h1>
      {/* Alisa Profile Section */}
      <div className="about-us-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img src="alisa.png" alt="" />
          </div>
          <div className="user-info">
            <p className="name-title">NAME</p>
            <hr className="name-line" />
            <p className="item name">Alisa Vorotyntseva</p>
            <p className="username-title">GITHUB</p>
            <hr className="username-line" />
            <p className="item username">@vorotyna</p>
            <p className="email-title">LINKED IN</p>
            <hr className="email-line" />
            <p className="item email">/alisa-vorotyntseva</p>
          </div>
        </div>

        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container">
              <TbIcon.TbMapPin className="pin-icon" />
              <p>Oakville, ON</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender">Female</p>
          </div>
          <div className="bio-container">
            <p className="about-me">ABOUT ME</p>
            <hr />
            <p className="bio-nav">
              <b> What I Learned:</b>
              <br /> React Router, setting state in a multi-page component,
              using state to post to multiple DB tables
            </p>
            <br />
            <p className="bio-nav">
              <b>An obstacle I overcame was:</b>
              <br /> Conceptualizing how to use data that is returned from a
              many-to-many DB relationship, force pushing to main 😇
            </p>
            <br />
            <p className="bio-nav">
              <b>A stretch goal of mine was:</b>
              <br /> Supporting team sports, partnering with sports venues and
              handling facility bookings through the app
            </p>
            <div className="profile-sportsmanship-rating">
              <p className="profile-rating-title">SPORTSMANSHIP RATING: </p>
              <Rating
                className="profile-rating-stars"
                name="half-rating-read"
                size="small"
                value={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="edit-profile-btn">EDIT PROFILE</button>
        </div>
      </div>

      {/* Ben Profile Section */}
      <div className="about-us-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img
              src="https://www.unitedway.ca/wp-content/uploads/2017/06/TempProfile.jpg"
              alt=""
            />
          </div>
          <div className="user-info">
            <p className="name-title">NAME</p>
            <hr className="name-line" />
            <p className="item name">Ben Stolb</p>
            <p className="username-title">GITHUB</p>
            <hr className="username-line" />
            <p className="item username">@ItsGentleBen</p>
            <p className="email-title">LINKED IN</p>
            <hr className="email-line" />
            <p className="item email">/linkedIn</p>
          </div>
        </div>

        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container">
              <TbIcon.TbMapPin className="pin-icon" />
              <p>Vancouver, BC</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender">Male</p>
          </div>

          <div className="bio-container">
            <p className="about-me">ABOUT ME</p>
            <hr />
            <p className="bio-nav">
              <b> What I Learned:</b>
              <br /> ANSWER HERE
            </p>
            <br />
            <p className="bio-nav">
              <b>An obstacle I overcame was:</b>
              <br /> ANSWER HERE
            </p>
            <br />
            <p className="bio-nav">
              <b>A stretch goal of mine was:</b>
              <br /> ANSWER HERE
            </p>
            <div className="profile-sportsmanship-rating">
              <p className="profile-rating-title">SPORTSMANSHIP RATING: </p>
              <Rating
                className="profile-rating-stars"
                name="half-rating-read"
                size="small"
                value={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
        <div className="button-container">
          <button className="edit-profile-btn">EDIT PROFILE</button>
        </div>
      </div>

      {/* Corbin Profile Section */}
      <div className="about-us-container">
        <div className="top-container">
          <div className="profile-photo-123">
            <img src="CH-profile-pic.png" alt="" />
          </div>
          <div className="user-info">
            <p className="name-title">NAME</p>
            <hr className="name-line" />
            <p className="item name">Corbin Heryet</p>
            <p className="username-title">GITHUB</p>
            <hr className="username-line" />
            <p className="item username">@Cheryet</p>
            <p className="email-title">LINKED IN</p>
            <hr className="email-line" />
            <p className="item email">/cheryet</p>
          </div>
        </div>

        <div className="middle-container">
          <div className="location-gender-container">
            <div className="location-container">
              <TbIcon.TbMapPin className="pin-icon" />
              <p>Lethbridge, AB</p>
              <MdIcon.MdOutlineKeyboardArrowDown className="down-icon" />
            </div>
            <p className="gender">Male</p>
          </div>

          <div className="bio-container">
            <p className="about-me">ABOUT ME</p>
            <hr />
            <br />
            <p className="bio-nav">
              <b> What I Learned:</b>
              <br /> Material UI, React Router, React Context
            </p>
            <br />
            <p className="bio-nav">
              <b>An obstacle I overcame was:</b>
              <br /> Using contex in mulitple pages and not having infinite
              render loops
            </p>
            <br />
            <p className="bio-nav">
              <b>A stretch goal of mine was:</b>
              <br /> To add a rating system to your skills based on a win/loss
              ratio
            </p>
            <div className="profile-sportsmanship-rating">
              <p className="profile-rating-title">SPORTSMANSHIP RATING: </p>
              <Rating
                className="profile-rating-stars"
                name="half-rating-read"
                size="small"
                value={5}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

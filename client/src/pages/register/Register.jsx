import React, { useState, useEffect } from "react";
import Credentials from "../../components/credentials-1/Credentials";
import EmailName from "../../components/emailName-2/EmailName";
import Location from "../../components/location-3/Location";
import BirthGender from "../../components/birthGender-4/BirthGender";
import ProfilePhoto from "../../components/profilePhoto-5/ProfilePhoto";
import Sports from "../../components/sports-6/Sports";
import Bio from "../../components/bio-7/Bio";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userParams = {
  username: "",
  password: "",
  first_name: "",
  email: "",
  location: "",
  age: "",
  gender: "",
  profile_pic: "",
  sports: [],
  bio: "",
};

function Register({ setToken }) {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("Credentials");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [emailName, setEmailName] = useState({ first_name: "", email: "" });
  const [location, setLocation] = useState({ location: "" });
  const [birthGender, setBirthGender] = useState({ age: "", gender: "" });
  const [profilePhoto, setProfilePhoto] = useState({ profile_pic: "" });
  const [sports, setSports] = useState([{ sport: "", self_skill: "" }]);
  const [bio, setBio] = useState({ bio: "" });

  const [isPost, setIsPost] = useState(false);

  const [allUserParams, setAllUserParams] = useState(userParams);
  useEffect(() => {
    setAllUserParams({
      username: credentials["username"],
      password: credentials["password"],
      first_name: emailName["first_name"],
      email: emailName["email"],
      location: location["location"],
      age: birthGender["age"],
      gender: birthGender["gender"],
      profile_pic: profilePhoto["profile_pic"],
      sports: sports,
      bio: bio["bio"],
    });
  }, [
    credentials,
    emailName,
    location,
    birthGender,
    profilePhoto,
    sports,
    bio,
  ]);

  useEffect(() => {
    if (isPost) {
      handlePost();
    }
  }, [isPost, allUserParams]);

  const handlePost = async () => {
    const isNotNull = Object.values(allUserParams).every(
      (param) => param !== null && param !== ""
    );
    if (isNotNull) {
      try {
        const registerSuccess = await axios.post(
          "/api/register",
          allUserParams
        );
        if (registerSuccess.data.success === true) {
          setToken(registerSuccess.data.token);
          navigate("/main");
        }
      } catch (error) {
        console.error(error);
      }
      setIsPost(false);
    }
  };

  return (
    <>
      {current === "Credentials" && (
        <Credentials
          setCurrent={setCurrent}
          credentials={credentials}
          setCredentials={setCredentials}
        />
      )}
      {current === "EmailName" && (
        <EmailName
          setCurrent={setCurrent}
          emailName={emailName}
          setEmailName={setEmailName}
        />
      )}
      {current === "Location" && (
        <Location
          setCurrent={setCurrent}
          location={location}
          setLocation={setLocation}
        />
      )}
      {current === "BirthGender" && (
        <BirthGender
          setCurrent={setCurrent}
          birthGender={birthGender}
          setBirthGender={setBirthGender}
        />
      )}
      {current === "ProfilePhoto" && (
        <ProfilePhoto
          setCurrent={setCurrent}
          profilePhoto={profilePhoto}
          setProfilePhoto={setProfilePhoto}
        />
      )}
      {current === "Sports" && (
        <Sports setCurrent={setCurrent} sports={sports} setSports={setSports} />
      )}
      {current === "Bio" && (
        <Bio
          setCurrent={setCurrent}
          bio={bio}
          setBio={setBio}
          setIsPost={setIsPost}
        />
      )}
      {/*  {current === "Last" && <Last postDetails={() => postUserDetails)} />} */}
    </>
  );
}

export default Register;

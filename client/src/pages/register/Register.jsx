import React, { useState, useEffect } from "react";
import Credentials from "../../components/credentials-1/Credentials";
import EmailName from "../../components/emailName-2/EmailName";
import Location from "../../components/location-3/Location";
import BirthGender from "../../components/birthGender-4/BirthGender";
import ProfilePhoto from "../../components/profilePhoto-5/ProfilePhoto";
import Sports from "../../components/sports-6/Sports";
import Bio from "../../components/bio-7/Bio";

// TODO: import axios

const userParams = {
  username: "",
  password: "",
  firstName: "",
  email: "",
  location: "",
  age: "",
  gender: "",
  // add more params as you incorporate more register pages
};

function Register() {
  // TODO list
  // 1. add current state to each register page for moving from page to page
  //    Steps:
  //      i. pass in setCurrent to the register page component you are onboarding
  //      ii. In the register sub component: Add onClick={handleContinue} to the continue button, onClick={handleBack} to the back button, handleContinue, handleBack functions,
  //      iii. add a call in the handleContinue and handleBack functions to setCurrent to the respective page
  //      iv. in Register.jsx add logic to the jsx such as: {current === "Location" && <Location setCurrent={setCurrent} />}
  // 2. add userParams state to each page:
  //    Steps:
  //        0. Add your new params to the userParams const at the top of Register.jsx
  //        i. create a use state here in Register.jsx for the params that the register page you are adding has (eg look at [credentials, setCredentials])
  //        ii. add the state and setter (eg. credentials, setCredentials) to the function props {credentials, setCredentials}
  //        iii. Add a useState for each input field you have -> look at credentials input field states username and password - make sure to set defaults based on the passed in state from Register.jsx (ie. credentials["username"])
  //        iv. add value and onChange props to the input fields, if using other methods of input such as dropdown ask ChatGPT
  //        v. in handleChange add a call to the setter you passed in with the child components state -> setCredentials(username: username) in this case setting username of parent to username of child
  //        vi. in the useEffect of Register.jsx add the newly created params to the setAllUserParams call: if i add poop then add it too the bottom of setAllUserParams({username: username,..., poop: poop}) just follow whats alraedy there
  //        vii. Add the new state to the dependency array of useEffect
  //
  //
  //
  const [current, setCurrent] = useState("Credentials");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [emailName, setEmailName] = useState({ firstName: "", email: "" });
  const [location, setLocation] = useState({ location: "" });
  const [birthGender, setBirthGender] = useState({ age: "", gender: "" });

  const [allUserParams, setAllUserParams] = useState(userParams);
  useEffect(() => {
    setAllUserParams({
      username: credentials["username"],
      password: credentials["password"],
      firstName: emailName["firstName"],
      email: emailName["email"],
      location: location["location"],
      age: birthGender["age"],
      gender: birthGender["gender"],
      // add more params as you incorporate more
    });
    console.log(allUserParams);
  }, [credentials, emailName, location, birthGender]);

  // const postUserDetails = () => {
  //  axios.post(/user, allUserParams)
  // }
  // you may need to change allUserParams to look like what the backend is expecting:
  // example: backend expects the body to have

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
      {current === "ProfilePhoto" && <ProfilePhoto setCurrent={setCurrent} />}
      {current === "Sports" && <Sports setCurrent={setCurrent} />}
      {current === "Bio" && <Bio setCurrent={setCurrent} />}
      {/* // refer below on how to post it */}
      {/*  {current === "Last" && <Last postDetails={() => postUserDetails)} />} */}
    </>
  );
}

export default Register;

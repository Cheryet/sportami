import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const userDataContext = createContext();

export default function UserDataProvider(props) {
  //Helper - Get users data when logged in
  useEffect(() => {
    const userPromise = axios.get(`/api/users/${props.token}`);
    const sportsPromise = axios.get(`/api/user_sports/${props.token}`);
    const ratingPromise = axios.get(`/api/reviews/rating/${props.token}`);

    Promise.all([userPromise, sportsPromise, ratingPromise]).then((all) => {
      setUserData({
        user: all[0].data[0],
        sports: all[1].data,
        rating: all[2].data,
      });
      setLocation(all[0].data[0].location);
    });
  }, []);

  //User State
  const [userData, setUserData] = useState({
    user: {},
    sports: [],
    rating: {},
  });

  //Location state
  const [location, setLocation] = useState();

  const userDataInfo = {
    userData,
    location,
    setUserData,
    setLocation,
  };

  return (
    <>
      <userDataContext.Provider value={userDataInfo}>
        {props.children}
      </userDataContext.Provider>
    </>
  );
}

import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./sportItem.scss";

const SportItem = (props) => {
  //Sports State

  const [sports, setSports] = useState([]);

  useEffect(() => {
    axios.get(`/api/sports`).then((res) => {
      setSports(res.data);
    });
  }, []);

  let sport = "";
  const getSportById = (id) => {
    sports.forEach((item) => {
      if (item.id === id) {
        sport = item.name;
      }
    });
  };

  getSportById(props.sport_id);

  console.log("sport", sport);

  console.log("sports", sports);
  return (
    <>
      <li className="sports-item">{sport}</li>
    </>
  );
};

export default SportItem;

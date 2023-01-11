import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const TopSport = (props) => {
  const [sport, setSport] = useState();

  useEffect(() => {
    if (props.sport_id) {
      axios.get(`/api/sports/${props.sport_id}`).then((res) => {
        setSport(res.data[0].name);
      });
    }
  });
  return <>{sport}</>;
};

export default TopSport;

import "./location.scss";
import { ArrowBackIos } from "@material-ui/icons";
import React, { useState } from "react";

const cities = ["Lethbridge", "Oakville", "Vancouver"];

function Location({ setCurrent, location, setLocation }) {
  const [city, setCity] = useState(location["location"]);

  const handleContinue = () => {
    setLocation({
      location: city,
    });
    setCurrent("BirthGender");
  };

  const handleBack = () => {
    setCurrent("EmailName");
  };
  return (
    <div className="location">
      <ArrowBackIos onClick={handleBack} />
      <h4>My nearest location to play is</h4>
      <select required name="cities" onChange={(e) => setCity(e.target.value)}>
        <option value="" selected disabled>
          Select an option
        </option>
        {cities.map((city) => {
          return (
            <option key={city} value={city}>
              {city}
            </option>
          );
        })}
      </select>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default Location;
